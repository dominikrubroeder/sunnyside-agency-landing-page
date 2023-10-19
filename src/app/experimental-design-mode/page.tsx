"use client";

import { useState } from "react";

import HeroSection from "@/components/sections/non-ssr/HeroSection";
import ImageTextBlockSection from "@/components/sections/non-ssr/ImageTextBlockSection";
import TextOnImageSection from "@/components/sections/non-ssr/TextOnImageSection";
import TestimonialsSection from "@/components/sections/non-ssr/TestimonialsSection";
import ImageGridSection from "@/components/sections/non-ssr/ImageGridSection";

export default function Page() {
  const [isExperimentalDesignMode, setIsExperimentalDesignMode] =
    useState(false);
  return (
    <div>
      <HeroSection />
      <div className="sticky top-0 z-50 flex items-center justify-center gap-4 p-4">
        <button
          className="relative p-4"
          onClick={() => setIsExperimentalDesignMode(false)}
        >
          Base Design
          <span
            className={`absolute inset-0 -z-10 rounded-2xl bg-gray-100 transition duration-300 ${
              isExperimentalDesignMode
                ? "translate-x-1/2 opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          ></span>
        </button>
        <button
          className="relative p-4"
          onClick={() => setIsExperimentalDesignMode(true)}
        >
          Experimental
          <span
            className={`absolute inset-0 -z-10 rounded-2xl bg-gray-100 transition duration-300 ${
              isExperimentalDesignMode
                ? "translate-x-0 opacity-100"
                : "-translate-x-1/2 opacity-0"
            }`}
          ></span>
        </button>
      </div>
      <ImageTextBlockSection />
      <TextOnImageSection />
      <TestimonialsSection />
      <ImageGridSection />
    </div>
  );
}
