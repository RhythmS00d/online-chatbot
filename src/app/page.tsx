import Link from "next/link";

export default function Home() {
  return (
    <section className="flex items-center justify-center flex-col w-full h-full">
      <hgroup className="text-center justify-start h-[40%] py-12">
        <h1 className="text-3xl mb-2">Welcome to Chatter</h1>
        <p>
          A standlone platform to chat and share media to friends. <br /> Make
          custom rooms and chatter with people.
        </p>
      </hgroup>
      <div className="w-[40%]">
        <p className="text-center">To use Chatter, please login or signup.</p>
        <ul className="flex items-center justify-around my-4 mx-auto">
          <li>
            <Link
              href="/login"
              className="w-[120px] h-[40px] hover:bg-buttonHover bg-button text-white text-lg font-semibold flex items-center justify-center"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/signup?page=1"
              className="w-[120px] h-[40px] hover:bg-buttonHover bg-button text-white text-lg font-semibold flex items-center justify-center"
            >
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
