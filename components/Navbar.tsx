import Link from "next/link";
import Image from "next/image";
import AuthButton from "./AuthButton";

const navLinks = [
  { label: "Updates", href: "/updates" },
  { label: "Countdown", href: "/countdown" },
  { label: "Owners", href: "/owners" },
];

export default function Navbar() {
  return (
    <header className="border-b border-koko-border/70 bg-koko-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="KOKO"
            width={36}
            height={36}
            className="rounded-full"
          />
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-koko-text/80 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-koko-coralDark">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/cards"
            className="rounded-full bg-koko-purple px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-koko-purpleDark"
          >
            Cards
          </Link>
          <Link
            href="/invite"
            className="rounded-full bg-koko-purple px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-koko-purpleDark"
          >
            Invite
          </Link>
          <AuthButton />
        </div>
      </nav>
    </header>
  );
}
