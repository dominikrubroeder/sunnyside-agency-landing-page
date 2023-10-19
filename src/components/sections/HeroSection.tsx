import Image from "next/image";
import ArrowDown from "@/components/svg/ArrowDown";
import { getContentData } from "@/data";

export interface HeroSectionProps {
  h1: string;
  imageSrc: string;
  imageAlt: string;
}

export default async function HeroSection() {
  const {
    heroData: { h1, imageSrc, imageAlt },
  } = await getContentData();

  return (
    <section className="relative min-h-screen w-full pt-40 text-center">
      <div className="relative z-10 flex flex-col items-center gap-24 text-[3.5rem] text-white">
        <h1 className="font-fraunces uppercase leading-normal tracking-widest">
          {h1}
        </h1>
        <ArrowDown />
      </div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className="object-cover"
        sizes="100vw"
        fill
      />
    </section>
  );
}
