import Link from "next/link";
import AuthButton from "./AuthButton";

const navLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Updates", href: "/updates" },
  { label: "Jump", href: "/jump" },
  { label: "Countdown", href: "/countdown" },
];

export default function Navbar() {
  return (
    <header className="border-b border-koko-border/70 bg-koko-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-koko-coral/40 text-koko-coral">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 21s-7.5-4.6-10-9.2C.5 8 2.6 4 6.5 4c2 0 3.6 1.1 4.5 2.7C11.9 5.1 13.5 4 15.5 4c3.9 0 6 4 4.5 7.8C19.5 16.4 12 21 12 21z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-koko-coral">
            KOKO BOT
          </span>
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
