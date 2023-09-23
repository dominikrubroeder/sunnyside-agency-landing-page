import Image from "next/image";
import ArrowDown from "@/components/ArrowDown";
import ImageTextSection from "@/components/ImageTextSection";

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

      <ImageTextSection
        title="Transform your brand"
        imagePosition="Right"
        imageSource="/transform.jpg"
        text="We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you."
      />

      <ImageTextSection
        title="Stand out to the right audience"
        imagePosition="Left"
        imageSource="/stand-out.jpg"
        text="Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places."
      />
    </main>
  );
}
