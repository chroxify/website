import Work from "@/components/work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-10">
      {/* Bio */}
      <p>
        I am a designer & developer based in{" "}
        <Image
          src="/berlin.svg"
          alt="Berlin"
          width={26}
          height={26}
          draggable={false}
          priority
          className="inline-block grayscale opacity-85 -rotate-6 -mt-1.5 select-none"
        />{" "}
        Berlin, Germany.
        <br />
        <br />
        Currently, I work as a design engineer at Superwall where I focus on
        delivering polished interfaces and creating refined web experiences with
        an emphasis on performance, accessibility, and attention to detail.
        <br />
        <br />
        Outside of work, I enjoy learning new skills, skiing, and building
        (mostly open source) software.
      </p>

      <Work />
    </div>
  );
}
