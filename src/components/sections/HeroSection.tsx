import ImageTextBlock from "@/components/ImageTextBlock";
import ArrowDown from "@/components/svg/ArrowDown";
import Image from "next/image";

export default function HeroSection() {
  return (
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
        className="object-cover"
        sizes="100vw"
        fill
      />
    </section>
  );
}
