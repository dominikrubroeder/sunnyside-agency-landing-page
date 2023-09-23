import Image from "next/image";
import ArrowDown from "@/components/ArrowDown";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-screen w-full pt-40 text-center">
        <div className="relative z-10 flex flex-col items-center gap-24 text-[3.5rem] text-white">
          <h1 className="font-fraunces uppercase leading-normal tracking-widest">
            We are creatives
          </h1>
          <ArrowDown />
        </div>
        <Image
          src="/header.jpg"
          alt="Orange on blue background"
          layout="fill"
          objectFit="cover"
        />
      </section>

      <section className="grid min-h-[37.5rem] grid-cols-2">
        <div className="mx-auto flex max-w-[27.8175rem] flex-col justify-center gap-8 text-left">
          <h2 className="font-fraunces text-[2.5rem] leading-[1.2]">
            Transform your brand
          </h2>
          <p>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a
            href=""
            title="Learn more"
            className="relative self-baseline pl-2 pr-2 font-fraunces uppercase transition-all duration-300 after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-4 after:w-full after:rounded-full after:bg-[#FAD400] hover:pl-4 hover:pr-4"
          >
            Learn more
          </a>
        </div>

        <div className="relative">
          <Image
            src="/transform.jpg"
            alt="Transform"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </section>
    </main>
  );
}
