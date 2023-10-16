import Image from "next/image";

interface ImageTextSectionProps {
  title: string;
  imagePosition: "Left" | "Right";
  imageSource: string;
  text: string;
}
export default function ImageTextBlock({
  title,
  imagePosition,
  imageSource,
  text,
}: ImageTextSectionProps) {
  return (
    <section className="flex flex-col md:grid md:min-h-[37.5rem] md:grid-cols-2">
      <div
        className={`relative h-80 shrink-0 md:h-auto ${
          imagePosition === "Left" ? "md:order-1" : "md:order-2"
        }`}
      >
        <Image
          src={imageSource}
          alt="Transform"
          layout="fill"
          className="shrink-0"
          objectFit="cover"
        />
      </div>

      <div
        className={`mx-auto flex max-w-[27.8175rem] flex-col justify-center gap-8 px-6 py-16 text-left ${
          imagePosition === "Left" ? "md:order-2" : "md:order-1"
        }`}
      >
        <h2 className="font-fraunces text-[2.5rem] leading-[1.2]">{title}</h2>
        <p>{text}</p>
        <a
          href=""
          title="Learn more"
          className="relative self-baseline pl-2 pr-2 font-fraunces uppercase after:absolute after:bottom-0 after:left-0 after:-z-10 after:h-4 after:w-full after:rounded-full after:bg-[#FAD400]"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}
