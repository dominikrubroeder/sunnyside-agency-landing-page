import { getContentData } from "@/data";
import TextOnImage from "@/components/TextOnImage";

export default async function TextOnImageSection() {
  const { textOnImageData } = await getContentData();
  return (
    <section className="grid md:grid-cols-2">
      {textOnImageData.map((textOnImage, index) => (
        <TextOnImage
          key={index}
          title={textOnImage.title}
          text={textOnImage.text}
          imageSource={textOnImage.imageSource}
        />
      ))}
    </section>
  );
}
