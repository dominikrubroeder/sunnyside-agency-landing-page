"use client";

import Image from "next/image";
import { imageGridData } from "@/data";

export interface ImageGridProps {
  alt: string;
  src: string;
}

export default function ImageGridSection() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4">
      {imageGridData.map((image) => (
        <div key={image.src} className="relative h-[28rem]">
          <Image
            src={image.src}
            alt={image.alt}
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
            fill
          />
        </div>
      ))}
    </section>
  );
}
