import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" max-w-7xl bg-red-300 mx-auto relative flex flex-col justify-center items-center px-2">
      <Intro />
      <Divider />
    </main>
  );
}
