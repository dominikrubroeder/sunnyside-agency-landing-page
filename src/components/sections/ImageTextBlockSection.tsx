import { contentData } from "@/data";
import ImageTextBlock from "@/components/ImageTextBlock";

async function getData(): Promise<contentData> {
  const res = await fetch("http://localhost:3000/data.json");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export default async function ImageTextBlockSection() {
  const { imageTextBlockData } = await getData();

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
