import ImageGridSection from "@/components/sections/ImageGridSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TextOnImageSection from "@/components/sections/TextOnImageSection";
import ImageTextBlockSection from "@/components/sections/ImageTextBlockSection";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImageTextBlockSection />
      <TextOnImageSection />
      <TestimonialsSection />
      <ImageGridSection />
    </main>
  );
}
