import ImageTextBlock from "@/components/ImageTextBlock";
import { imageTextBlockData } from "@/data";

interface ImageTextBlockSectionProps {
  isExperimentalDesignMode?: boolean;
}

export default function ImageTextBlockSection({
  isExperimentalDesignMode,
}: ImageTextBlockSectionProps) {
  return (
    <section className="relative min-h-[37.5rem]">
      {imageTextBlockData.map((imageTextBlock, index) => (
        <ImageTextBlock
          key={index}
          title={imageTextBlock.title}
          imagePosition={imageTextBlock.imagePosition as "Left" | "Right"}
          imageSource={imageTextBlock.imageSource}
          text={imageTextBlock.text}
          isExperimentalDesignMode={isExperimentalDesignMode}
          zIndex={-index}
        />
      ))}
    </section>
  );
}
