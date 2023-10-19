import Testimonial from "@/components/Testimonial";
import { testimonialsData } from "@/data";

export default function TestimonialsSection() {
  return (
    <section className="grid justify-center gap-20 py-20">
      <h2 className="mx-auto font-fraunces uppercase tracking-widest">
        Client testimonials
      </h2>

      <div className="grid items-center justify-center gap-16 md:flex md:gap-8">
        {testimonialsData.map((testimonial, index) => (
          <Testimonial
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            rank={testimonial.rank}
            imageSource={testimonial.imageSource}
          />
        ))}
      </div>
    </section>
  );
}
