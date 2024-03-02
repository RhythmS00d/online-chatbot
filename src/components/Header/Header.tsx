"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useUIStore } from "@/store/uiStore";
import { useUserStore } from "@/store/userStore";

type Link = {
  name: string;
  href: string;
};

const linkStyle = "hover:underline";

export const Header = () => {
  const pathname = usePathname();

  const { links } = useUIStore();
  const { currentUser } = useUserStore();

  return (
    <header className="w-full h-[80px] flex items-center justify-between px-8 border-b-[1px] shadow-md">
      <figure>
        <Link href="/" className="flex items-center">
          <Image
            className="w-auto h-auto"
            priority
            src="logo.svg"
            alt="Logo"
            width={50}
            height={50}
          />
          <h3>CHATTER</h3>
        </Link>
      </figure>
      <nav className="flex gap-8">
        {links[`${sessionStorage.getItem("user") === null ? "noUser" : "user"}`].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={linkStyle + (pathname === link.href ? " underline" : "")}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};
