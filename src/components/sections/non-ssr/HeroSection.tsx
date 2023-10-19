import Image from "next/image";
import { heroData } from "@/data";
import ArrowDown from "@/components/svg/ArrowDown";

export interface HeroSectionProps {
  h1: string;
  imageSrc: string;
  imageAlt: string;
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full pt-40 text-center">
      <div className="relative z-10 flex flex-col items-center gap-24 text-[3.5rem] text-white">
        <h1 className="font-fraunces uppercase leading-normal tracking-widest">
          {heroData.h1}
        </h1>
        <ArrowDown />
      </div>
      <Image
        src={heroData.imageSrc}
        alt={heroData.imageAlt}
        className="object-cover"
        sizes="100vw"
        fill
      />
    </section>
  );
}
