import Image from "next/image";

export default function ImageGrid() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      <div className="relative h-[28rem]">
        <Image
          src="/gallery-milkbottles.jpg"
          alt="Milkbottles"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="relative h-[28rem]">
        <Image
          src="/gallery-orange.jpg"
          alt="Milkbottles"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="relative h-[28rem]">
        <Image
          src="/gallery-cone.jpg"
          alt="Milkbottles"
          layout="fill"
          className="object-cover"
        />
      </div>

      <div className="relative h-[28rem]">
        <Image
          src="/gallery-sugarcubes.jpg"
          alt="Milkbottles"
          layout="fill"
          className="object-cover"
        />
      </div>
    </section>
  );
}
