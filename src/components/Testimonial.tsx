import Image from "next/image";

export interface TestimonialProps {
  text: string;
  name: string;
  rank: string;
  imageSource: string;
}

export default function Testimonial({
  text,
  name,
  rank,
  imageSource,
}: TestimonialProps) {
  return (
    <div className="grid w-full max-w-[21.875rem] gap-4 text-center md:gap-14">
      <Image
        src={imageSource}
        alt={`${rank} preview image`}
        height={72}
        width={72}
        className="mx-auto rounded-full"
      />
      <p>{text}</p>
      <div className="grid gap-2">
        <h3 className="font-fraunces leading-normal">{name}</h3>
        <small className="text-xs leading-normal text-[#A7AAAD]">{rank}</small>
      </div>
    </div>
  );
}
