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
    </main>
  );
}
