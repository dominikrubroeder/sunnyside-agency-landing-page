import Image from "next/image";
import ArrowDown from "@/components/svg/ArrowDown";
import ImageTextBlock from "@/components/ImageTextBlock";
import TextOnImage from "@/components/TextOnImage";
import ClientTestimonial from "@/components/ClientTestimonial";
import ImageGrid from "@/components/ImageGrid";

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

      <ImageTextBlock
        title="Transform your brand"
        imagePosition="Right"
        imageSource="/transform.jpg"
        text="We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you."
      />

      <ImageTextBlock
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

      <section className="grid justify-center gap-20 py-20">
        <h2 className="mx-auto font-fraunces uppercase tracking-widest">
          Client testimonials
        </h2>

        <div className="flex items-center justify-center gap-8">
          <ClientTestimonial
            text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
            name="Emily R."
            rank="Marketing Director"
            imageSource="/emily.jpg"
          />

          <ClientTestimonial
            text="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
            name="Thomas S."
            rank="Chief Operating Officer"
            imageSource="/thomas.jpg"
          />

          <ClientTestimonial
            text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            name="Jennie F."
            rank="Business Owner"
            imageSource="/jennie.jpg"
          />
        </div>
      </section>

      <ImageGrid />
    </main>
  );
}
