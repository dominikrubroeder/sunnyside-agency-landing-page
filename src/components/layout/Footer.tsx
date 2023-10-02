import Logo from "@/components/svg/Logo";
import Facebook from "@/components/svg/Facebook";
import Twitter from "@/components/svg/Twitter";
import Instagram from "@/components/svg/Instagram";
import Pinterest from "@/components/svg/Pinterest";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-10 bg-[#90D4C6] px-4 py-16 text-center">
      <Logo colorScheme="Dark" />

      <ul className="text-app-green-600 flex gap-14 font-light">
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>

      <div className="flex gap-8">
        <Facebook />
        <Twitter />
        <Instagram />
        <Pinterest />
      </div>
    </footer>
  );
}
