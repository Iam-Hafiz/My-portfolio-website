import About from "@/components/About";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <main className=" max-w-7xl bg-red-300 mx-auto relative flex flex-col justify-center items-center px-2">
      <Intro />
      <Divider />
      <About/>
    </main>
  );
}
