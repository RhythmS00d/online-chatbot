'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Link = {
  name: string;
  href: string;
};

const links: Link[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Contacts",
    href: "/contacts",
  },
  {
    name: "Rooms",
    href: "/rooms",
  },
];
const linkStyle = "hover:underline";

export const Header = () => {
  const pathname = usePathname()

  return (
    <header className="w-full h-[80px] flex items-center justify-between px-8 border-b-[1px] shadow-md">
      <figure>
        <Link href="/" className="flex items-center">
          <Image src="logo.svg" alt="Logo" width={50} height={50} />
          <h3>CHATTER</h3>
        </Link>
      </figure>
      <nav className="flex gap-8">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={linkStyle + (pathname === link.href ? " underline" : "")}>
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
