import { promises as fs } from "fs";

import { ImageTextSectionProps } from "@/components/ImageTextBlock";
import { TextOnImageProps } from "@/components/TextOnImage";
import { TestimonialProps } from "@/components/Testimonial";
import { ImageGridProps } from "@/components/sections/ImageGridSection";
import { HeroSectionProps } from "@/components/sections/HeroSection";

export type ContentData = {
  heroData: HeroSectionProps;
  imageTextBlockData: ImageTextSectionProps[];
  textOnImageData: TextOnImageProps[];
  testimonialsData: TestimonialProps[];
  imageGridData: ImageGridProps[];
};

export async function getContentData(): Promise<ContentData> {
  const res = await fs.readFile(process.cwd() + "/public/data.json", "utf8");
  return JSON.parse(res);
}

export const heroData: HeroSectionProps = {
  h1: "We are creatives",
  imageSrc: "/header.jpg",
  imageAlt: "Orange on blue background",
};

export const imageTextBlockData: ImageTextSectionProps[] = [
  {
    title: "Transform your brand",
    imagePosition: "Right",
    imageSource: "/transform.jpg",
    text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
  },
  {
    title: "Stand out to the right audience",
    imagePosition: "Left",
    imageSource: "/stand-out.jpg",
    text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
  },
];
export const textOnImageData = [
  {
    title: "Graphic Design",
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
    imageSource: "/graphic-design.jpg",
  },
  {
    title: "Photography",
    text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
    imageSource: "/photography.jpg",
  },
];
export const testimonialsData = [
  {
    text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    rank: "Marketing Director",
    imageSource: "/emily.jpg",
  },
  {
    text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    rank: "Chief Operating Officer",
    imageSource: "/thomas.jpg",
  },
  {
    text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    rank: "Business Owner",
    imageSource: "/jennie.jpg",
  },
];
export const imageGridData = [
  {
    src: "/gallery-milkbottles.jpg",
    alt: "Milkbottles",
  },
  {
    src: "/gallery-orange.jpg",
    alt: "Orange",
  },
  {
    src: "/gallery-cone.jpg",
    alt: "Cone",
  },
  {
    src: "/gallery-sugarcubes.jpg",
    alt: "Sugargubes",
  },
];
