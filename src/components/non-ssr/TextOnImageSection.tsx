import { textOnImageData } from "@/data";
import TextOnImage from "@/components/TextOnImage";

export default function TextOnImageSection() {
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
