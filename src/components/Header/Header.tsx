import Image from "next/image";
import Link from "next/link";

const linkStyle = "hover:underline"

export const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center justify-between px-8 border-b-[1px] shadow-md">
      <figure>
        <Link href="/" className="flex items-center">
          <Image src="logo.svg" alt="Logo" width={50} height={50} />
          <h3>CHATTER</h3>
        </Link>
      </figure>
      <nav className="flex gap-8">
        <Link href="/" className={linkStyle}>
          Home
        </Link>
        <Link href="/friends" className={linkStyle}>
          Friends
        </Link>
        <Link href="/messages" className={linkStyle}>
          Messages
        </Link>
        <Link href="/rooms" className={linkStyle}>
          Rooms
        </Link>
      </nav>
    </header>
  );
};
