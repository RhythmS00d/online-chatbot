import Image from "next/image";
import Link from "next/link";

type Input = {
  [key: string]: string[];
};

type PageProps = {
  params: { page: number };
};

export default function Login({ params }: PageProps) {
  const inputs: Input[] = [
    {
      page1: ["Name", "Email"],
      page2: ["Username", "Password", "Confirm Password"],
    },
  ];
  return (
    <section className="flex items-center w-[70%]">
      <figure>
        <Image
          className="rounded-md"
          src="signup-aside.svg"
          alt="signup-aside-pic"
          width={300}
          height={400}
        />
      </figure>
      <form
        action=""
        className="flex flex-col w-[calc(100%-300px)] h-full items-start justify-center px-6 border-[2px] shadow-md"
      >
        <h1 className="px-2 mb-4 text-2xl">Signup to Chatter</h1>

        <button
          type="button"
          className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover mt-2"
        >
          {params.page === 1 ? "sadas" : "sa"}
        </button>
        <Link href="/login" className="hover:underline mt-2">
          Already a user?
        </Link>
      </form>
    </section>
  );
}
