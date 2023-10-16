import Image from "next/image";

interface TextOnImageProps {
  title: string;
  text: string;
  imageSource: string;
}

export default function TextOnImage({
  title,
  text,
  imageSource,
}: TextOnImageProps) {
  return (
    <div className="relative h-[37.5rem]">
      <Image
        src={imageSource}
        alt="TextOnImage"
        layout="fill"
        className="object-cover"
      />
      <div className="absolute bottom-16 left-1/2 z-10 min-h-[8rem] -translate-x-1/2 text-center">
        <h2 className="mx-auto mb-6 w-max font-fraunces text-[1.75rem]">
          {title}
        </h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
