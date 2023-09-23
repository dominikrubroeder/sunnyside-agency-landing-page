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
    <div className="relative">
      <Image
        src={imageSource}
        alt="TextOnImage"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-16 left-1/2 z-10 min-h-[8rem] -translate-x-1/2 text-center">
        <h2 className="mb-6 font-fraunces text-[1.75rem]">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}