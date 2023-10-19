import Image from "next/image";

export interface ImageTextSectionProps {
  title: string;
  imagePosition: "Left" | "Right";
  imageSource: string;
  text: string;
}

interface ImageTextBlockPros extends ImageTextSectionProps {
  isExperimentalDesignMode?: boolean;
  zIndex: number;
}

export default function ImageTextBlock({
  title,
  imagePosition,
  imageSource,
  text,
  isExperimentalDesignMode,
  zIndex,
}: ImageTextBlockPros) {
  return (
    <section
      className={`flex flex-col md:grid md:min-h-[37.5rem] md:grid-cols-2 ${
        isExperimentalDesignMode
          ? "absolute top-0 mx-4 w-full"
          : "relative top-auto"
      }`}
      style={{
        paddingLeft: `${zIndex * 10}rem`,
        paddingRight: `${zIndex * 10}rem`,
        zIndex: zIndex,
        transform: `translateY(${zIndex * 20}px)`,
      }}
    >
      <div
        className={`relative h-80 shrink-0 transition-all duration-1000 md:h-auto ${
          isExperimentalDesignMode
            ? `md:order-2`
            : imagePosition === "Left"
            ? "md:order-1"
            : "md:order-2"
        }`}
      >
        <Image
          src={imageSource}
          alt="Transform"
          className={`shrink-0 object-cover ${
            isExperimentalDesignMode
              ? "overflow-hidden rounded-3xl"
              : "rounded-none"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
          style={{
            paddingLeft: `${Math.abs(zIndex)}rem`,
            paddingRight: `${Math.abs(zIndex)}rem`,
          }}
        />
      </div>

      <div
        className={`mx-auto flex max-w-[27.8175rem] flex-col justify-center gap-8 px-6 py-16 text-left ${
          isExperimentalDesignMode
            ? "bg-white md:order-1"
            : imagePosition === "Left"
            ? "md:order-2"
            : "md:order-1"
        }`}
      >
        <h2 className="font-fraunces text-[2.5rem] leading-[1.2]">{title}</h2>
        <p>{text}</p>
        <button
          title="Learn more"
          className="relative self-baseline pl-2 pr-2 font-fraunces uppercase after:absolute after:bottom-0 after:left-0 after:right-0 after:-z-10 after:h-4 after:rounded-full after:bg-[#FAD400] after:transition-all hover:after:-left-1 hover:after:-right-1"
        >
          Learn more
        </button>
      </div>
    </section>
  );
}
