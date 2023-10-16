import Logo from "@/components/svg/Logo";
import Navigation from "@/components/Navigation";

export default function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-50 flex items-center justify-between gap-4 px-12 py-8 text-white">
      <Logo />

      <div className="flex items-center gap-4">
        <Navigation viewport="Desktop" />
        <Navigation viewport="Mobile" />
      </div>
    </header>
  );
}
