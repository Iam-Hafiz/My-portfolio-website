import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type ImagesSliderProps = {
    imagesUrl: string[]
}

export default function ImagesSlider({ imagesUrl }: ImagesSliderProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      orientation="vertical"
      className="w-full"
    >
      <CarouselContent className=" h-[540px]">
        {imagesUrl.map((url, index) => (
          <CarouselItem key={index} className=" basis-full ">
            <Image
              src={url}
              alt="Web project I developped"
              width={1840}
              height={940}
              quality={95}
              className=" hidden sm:block rounded-t-lg shadow-2xl 
                transition 
                group-hover:scale-[1.01]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
