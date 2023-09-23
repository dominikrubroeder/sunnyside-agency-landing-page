import Image from "next/image";

interface ImageTextSectionProps {
  title: string;
  imagePosition: "Left" | "Right";
  imageSource: string;
  text: string;
}
export default function ImageTextSection({
  title,
  imagePosition,
  imageSource,
  text,
}: ImageTextSectionProps) {
  return (
    <section className="grid min-h-[37.5rem] grid-cols-2">
      <div
        className={`mx-auto flex max-w-[27.8175rem] flex-col justify-center gap-8 text-left ${
          imagePosition === "Left" ? "order-2" : "order-1"
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

      <div
        className={`relative ${
          imagePosition === "Left" ? "order-1" : "order-2"
        }`}
      >
        <Image
          src={imageSource}
          alt="Transform"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </section>
  );
}
