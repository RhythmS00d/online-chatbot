import React from "react";

import { notFound } from "next/navigation";

import { sampleMessages } from "@/sample-data/sampleMessages";

type PageProps = {
  params: {
    username: string;
  };
};

export default function page({ params }: PageProps) {
  const currentUser = "john";
  if (!isNaN(+params.username) || currentUser === params.username) {
    notFound();
  }
  const messages = sampleMessages.find(
    (message) => message.username === currentUser
  )?.messages;

  const messageStyle = "text-white";

  return (
    <section className="overflow-y-scroll w-full">
      <ul className="flex flex-col justify-end h-full pb-20">
        {messages?.from.toReversed().map((message) => (
          <li key={message.id} id={message.id} className={messageStyle + " "}>
            {message.message}
          </li>
        ))}
        {messages?.to.toReversed().map((message) => (
          <li key={message.id} id={message.id} className={messageStyle + " "}>
            {message.message}
          </li>
        ))}
      </ul>
      <div className="fixed bottom-8 m-4 w-[650px]">
        <form action="" className="flex items-center justify-center gap-2">
          <input
            className="py-3 px-2 my-2 rounded-md outline-none border-[1px] shadow-md w-full"
            type="text"
            placeholder="Send message"
            autoFocus
          />
          <button
            type="button"
            className="w-[100px] h-[50px] bg-button text-white rounded-md hover:bg-buttonHover flex items-center justify-center"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
