"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

//components
import { GoogleButton } from "@/components/Buttons";
import { useEffect, useState } from "react";
import { SignupDetails } from "@/utils/types";
import { UserAuth } from "@/contexts/AuthContext";

type Input = {
  [key: string]: {
    name: string;
    type: string;
  }[];
};

type PageProps = {
  searchParams: { page: number };
};

export default function Login({ searchParams }: PageProps) {
  const page = +searchParams.page;
  const router = useRouter();
  const { fbActions, user } = UserAuth();
  const [signupDetails, setSignupDetails] = useState<SignupDetails>({
    email: "",
    password: "",
    username: "",
    name: "",
    "confirm password": "",
  });
  const [error, setError] = useState("");

  if (page > 2 || page <= 0) notFound();

  const inputs: Input[] = [
    {
      page1: [
        { name: "Name", type: "text" },
        { name: "Email", type: "email" },
      ],
      page2: [
        { name: "Username", type: "text" },
        { name: "Password", type: "password" },
        { name: "Confirm Password", type: "password" },
      ],
    },
  ];

  async function handleSubmitAction() {
    if (page === 1) {
      setError("");
      router.push("/signup?page=2");
    } else if (page === 2) {
      if (signupDetails.name === "" || signupDetails.email === "") {
        setError("Please fill all required fields!");
        router.push("/signup?page=1");
      } else {
        if (signupDetails.password !== signupDetails["confirm password"])
          setError("Passwords do not match!");
        else {
          setError("");
          const user = await fbActions.createUser(
            signupDetails.email,
            signupDetails.password,
            signupDetails.name
          );

          if (user.message) setError(user.message);
        }
      }
    }
  }

  useEffect(() => {
    if (user) {
      router.push("/messages");
    }
  }, [user]);

  return (
    <section className="flex items-center w-[70%]">
      <figure className="h-full">
        <Image
          className="rounded-md"
          src="signup-aside.svg"
          alt="signup-aside-pic"
          width={300}
          height={400}
        />
      </figure>
      <form
        action={handleSubmitAction}
        className="flex flex-col w-[calc(100%-300px)] h-full items-start justify-center px-6 border-[2px] shadow-md"
      >
        <h1 className="px-2 mb-4 text-2xl">Signup to Chatter</h1>
        <h3 className="text-red-500 font-semibold">{error}</h3>
        {inputs[0][page === 1 ? "page1" : "page2"].map((input, index) => {
          return (
            <input
              name={input.name}
              key={page === 1 ? index + 12 : index + 22}
              placeholder={input.name + "*"}
              type={input.type}
              autoComplete="off"
              autoCorrect="off"
              className="py-4 px-2 my-2 rounded-md outline-none border-[1px] shadow-md w-full"
              value={signupDetails[input.name.toLowerCase()]}
              onChange={(e) =>
                setSignupDetails({
                  ...signupDetails,
                  [input.name.toLowerCase()]: e.target.value,
                })
              }
              required
            />
          );
        })}
        <div className="flex gap-2 mb-2">
          <>
            {page === 2 && (
              <Link
                href="?page=1"
                className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover mt-2 flex items-center justify-center"
              >
                Back
              </Link>
            )}
            <button
              type="submit"
              className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover mt-2 flex items-center justify-center"
            >
              {page === 2 ? "Boom" : "Next"}
            </button>
          </>
        </div>
        <GoogleButton text="up" />
        <Link href="/login" className="hover:underline mt-2">
          Already a user?
        </Link>
      </form>
    </section>
  );
}
