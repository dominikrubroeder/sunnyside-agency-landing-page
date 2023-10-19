"use client";

import { useState } from "react";

import HeroSection from "@/components/non-ssr/HeroSection";
import ImageTextBlockSection from "@/components/non-ssr/ImageTextBlockSection";
import TextOnImageSection from "@/components/non-ssr/TextOnImageSection";
import TestimonialsSection from "@/components/non-ssr/TestimonialsSection";
import ImageGridSection from "@/components/non-ssr/ImageGridSection";
import DesignModeSwitch from "@/components/non-ssr/DesignModeSwitch";

export default function Page() {
  const [isExperimentalDesignMode, setIsExperimentalDesignMode] =
    useState(false);

  return (
    <div className={`grid ${isExperimentalDesignMode ? "gap-8" : "gap-0"}`}>
      <HeroSection />
      <DesignModeSwitch
        isExperimentalDesignMode={isExperimentalDesignMode}
        turnOff={() => setIsExperimentalDesignMode(false)}
        turnOn={() => setIsExperimentalDesignMode(true)}
      />
      <ImageTextBlockSection
        isExperimentalDesignMode={isExperimentalDesignMode}
      />
      <TextOnImageSection />
      <TestimonialsSection />
      <ImageGridSection />
    </div>
  );
}
