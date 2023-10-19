import ImageTextBlock from "@/components/ImageTextBlock";
import { imageTextBlockData } from "@/data";

export default function ImageTextBlockSection() {
  return (
    <section>
      {imageTextBlockData.map((imageTextBlock, index) => (
        <ImageTextBlock
          key={index}
          title={imageTextBlock.title}
          imagePosition={imageTextBlock.imagePosition as "Left" | "Right"}
          imageSource={imageTextBlock.imageSource}
          text={imageTextBlock.text}
        />
      ))}
    </section>
  );
}
