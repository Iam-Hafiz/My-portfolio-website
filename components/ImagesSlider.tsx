import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";

type ImagesSliderProps = {
    imagesUrl: string[]
}

export default function ImagesSlider({ imagesUrl }: ImagesSliderProps) {
      const [api, setApi] = React.useState<CarouselApi>();
      const [current, setCurrent] = React.useState(0);
      const [count, setCount] = React.useState(0);

      React.useEffect(() => {
        if (!api) {
          return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
          setCurrent(api.selectedScrollSnap() + 1);
        });
      }, [api]);
  return (
    <div className=" relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        orientation="vertical"
        className="w-full"
      >
        <CarouselContent className="max-h-[440px] md:max-h-[540px]">
          {imagesUrl.map((url, index) => (
            <CarouselItem key={index} className=" basis-full ">
              <Image
                src={url}
                alt="Web project I developped"
                width={1840}
                height={940}
                quality={95}
                className="rounded-t-lg shadow-2xl 
                transition 
                group-hover:scale-[1.01]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className=" text-center text-sm text-muted-foreground absolute -bottom-10 left-1/2 -translate-x-1/2 flex z-20 pr-3">
         Slide {current} <div className=" w-16 h-4"></div>of {count}
      </div>
    </div>
  );
}
