import Logo from "@/components/svg/Logo";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between gap-4 p-4 text-white">
      <div>
        <Logo />
      </div>

      <nav>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
