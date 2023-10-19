import { getContentData } from "@/data";
import ImageTextBlock from "@/components/ImageTextBlock";

export default async function ImageTextBlockSection() {
  const { imageTextBlockData } = await getContentData();

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
