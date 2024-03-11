"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

import { useRouter } from "next/navigation";

//components
import { GoogleButton } from "@/components/Buttons";
import { UserAuth } from "@/contexts/AuthContext";

export default function Login() {
  const inputs: string[] = ["Username", "Password"];
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user } = UserAuth();

  const router = useRouter();

  function handleLogin() {
    router.push("/messages");
    sessionStorage.setItem("user", "lisa");
  }

  function Loading() {
    return (
      <section
        className={
          "w-full flex justify-center items-center gap-3 " + loading
            ? "hidden"
            : ""
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="size-10"
        >
          <radialGradient
            id="a10"
            cx=".66"
            fx=".66"
            cy=".3125"
            fy=".3125"
            gradientTransform="scale(1.5)"
          >
            <stop offset="0" stopColor="#28ACFF"></stop>
            <stop offset=".3" stopColor="#28ACFF" stopOpacity=".9"></stop>
            <stop offset=".6" stopColor="#28ACFF" stopOpacity=".6"></stop>
            <stop offset=".8" stopColor="#28ACFF" stopOpacity=".3"></stop>
            <stop offset="1" stopColor="#28ACFF" stopOpacity="0"></stop>
          </radialGradient>
          <circle
            transform-origin="center"
            fill="none"
            stroke="url(#a10)"
            strokeWidth="15"
            strokeLinecap="round"
            strokeDasharray="200 1000"
            strokeDashoffset="0"
            cx="100"
            cy="100"
            r="70"
          >
            <animateTransform
              type="rotate"
              attributeName="transform"
              calcMode="spline"
              dur="2"
              values="360;0"
              keyTimes="0;1"
              keySplines="0 0 1 1"
              repeatCount="indefinite"
            ></animateTransform>
          </circle>
          <circle
            transform-origin="center"
            fill="none"
            opacity=".2"
            stroke="#28ACFF"
            strokeWidth="15"
            strokeLinecap="round"
            cx="100"
            cy="100"
            r="70"
          ></circle>
        </svg>
        Loading...
      </section>
    );
  }

  useEffect(() => {
    if (user) {
      router.push("/messages");
    }
  }, [user]);

  return (
    <>
      <Loading />
      <section className={"flex items-center w-[70%]"}>
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
          action={handleLogin}
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
                required
                id={input}
                className="py-4 px-2 my-2 rounded-md outline-none border-[1px] shadow-md w-full"
              />
              {input === "Password" && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-[27px]"
                >
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover mt-2 mb-2"
          >
            Boom
          </button>
          <GoogleButton />
          <Link href="/signup?page=1" className="hover:underline mt-2">
            New to Chatter? Signup here.
          </Link>
        </form>
      </section>
    </>
  );
}
