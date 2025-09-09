"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header({navHidden}: {navHidden?: boolean}) {
  const pathname = usePathname();
  const nav = [
    { href: "/", label: "Home" },
    { href: "#Top Rated", label: "Top Rated" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-2xl font-bold text-white">
          Netflix clone
        </Link>
        {!navHidden && <nav className="hidden gap-6 md:flex">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-sm text-white/80 hover:text-white",
                pathname === href && "text-white"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>}
       
      </div>
    </header>
  );
}
