import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Input = {
  [key: string]: string[];
};

type PageProps = {
  searchParams: { page: number };
};

export default function Login({ searchParams }: PageProps) {
  const page = +searchParams.page;

  if (page > 2 || page <= 0) notFound();

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
        {inputs[0][page === 1 ? "page1" : "page2"].map((input, index) => {
          return (
            <input
              name={input}
              key={page === 1 ? index + 12 : index + 22}
              placeholder={input}
              type={input}
              autoComplete="off"
              autoCorrect="off"
              className="py-4 px-2 my-2 rounded-md outline-none border-[1px] shadow-md w-full"
              required
            />
          );
        })}
        <div className="flex gap-2">
          {page === 2 ? (
            <>
              <Link
                href="/signup?page=1"
                className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover mt-2 flex items-center justify-center"
              >
                Back
              </Link>
              <button
                type="submit"
                className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover mt-2 flex items-center justify-center"
              >
                Boom
              </button>
            </>
          ) : (
            <Link
              href={"/signup?page=2"}
              className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover mt-2 flex items-center justify-center"
            >
              Next
            </Link>
          )}
        </div>
        <Link href="/login" className="hover:underline mt-2">
          Already a user?
        </Link>
      </form>
    </section>
  );
}
