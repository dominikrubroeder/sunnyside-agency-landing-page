import Image from "next/image";

interface ClientTestimonialProps {
  text: string;
  name: string;
  rank: string;
  imageSource: string;
}

export default function ClientTestimonial({
  text,
  name,
  rank,
  imageSource,
}: ClientTestimonialProps) {
  return (
    <div className="grid w-full max-w-[21.875rem] gap-14 text-center">
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
