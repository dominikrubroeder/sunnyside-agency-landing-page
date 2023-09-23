import Image from "next/image";
import ArrowDown from "@/components/ArrowDown";
import ImageTextSection from "@/components/ImageTextSection";
import TextOnImage from "@/components/TextOnImage";

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

      <section className="grid min-h-[37.5rem] grid-cols-2">
        <TextOnImage
          title="Graphic Design"
          text="Great design makes you memorable. We deliver artwork that underscores
        your brand message and captures potential clients’ attention."
          imageSource="/graphic-design.jpg"
        />

        <TextOnImage
          title="Photography"
          text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
          imageSource="/photography.jpg"
        />
      </section>
    </main>
  );
}
