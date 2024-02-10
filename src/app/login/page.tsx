"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type Input = string;

export default function Login() {
  const inputs: Input[] = ["Username", "Password"];
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="flex items-center w-[70%]">
      <figure>
        <Image
          className="rounded-md"
          src="login-aside.svg"
          alt="login-aside-pic"
          width={300}
          height={400}
        />
      </figure>
      <form
        action=""
        className="flex flex-col w-[calc(100%-300px)] h-full items-start justify-center px-6 border-[2px] shadow-md"
      >
        <h1 className="px-2 mb-4 text-2xl">Login to Chatter</h1>
        {inputs.map((input, index) => (
          <div key={index} className="w-full relative">
            <input
              name={input}
              placeholder={input}
              type={
                input === "Password"
                  ? showPassword
                    ? "text"
                    : "password"
                  : "text"
              }
              autoComplete="off"
              autoCorrect="off"
              className="py-4 px-2 my-2 rounded-md outline-none border-[1px] shadow-md w-full"
            />
            {input === "Password" && (
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-4 top-[27px]"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover mt-2"
        >
          Boom
        </button>
        <Link href="/signup" className="hover:underline mt-2">
          New to Chatter? Signup here.
        </Link>
      </form>
    </section>
  );
}
