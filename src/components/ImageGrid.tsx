import Image from "next/image";

export default function ImageGrid() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      <div className="relative h-[28rem]">
        <Image
          src="/gallery-milkbottles.jpg"
          alt="Milkbottles"
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          fill
        />
      </div>

      <div className="relative h-[28rem]">
        <Image
          src="/gallery-orange.jpg"
          alt="Milkbottles"
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          fill
        />
      </div>

      <div className="relative h-[28rem]">
        <Image
          src="/gallery-cone.jpg"
          alt="Milkbottles"
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          fill
        />
      </div>

      <div className="relative h-[28rem]">
        <Image
          src="/gallery-sugarcubes.jpg"
          alt="Milkbottles"
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
          fill
        />
      </div>
    </section>
  );
}
