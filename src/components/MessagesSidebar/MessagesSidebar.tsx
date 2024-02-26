import React from "react";
import Image from "next/image";

import { CiSearch } from "react-icons/ci";

import { sampleContacts } from "@/sample-data/sampleContacts";
import { sampleMessages } from "@/sample-data/sampleMessages";

export default function MessagesSidebar() {
  const currentUser = "1234";
  const USER = {
    currentUserContacts: sampleContacts.find(
      (contact) => contact.id === currentUser
    )?.contacts,
    currentUserMessages: sampleMessages.find(
      (message) => message.id === currentUser
    )?.messages,
  };

  function getLastUserMessage(from: string): string | undefined {
    return USER.currentUserMessages?.from.find(
      (message) => message.username === from
    )?.message;
  }

  return (
    <aside className="h-full max-w-[35%] min-w-[30%] max-sm:w-full bg-[#001220] overflow-y-scroll flex flex-col items-center">
      <search className="w-full p-1 outline-none relative">
        <input
          className="w-full outline-none p-2 rounded-md"
          type="text"
          placeholder="Search"
        />
        <CiSearch className="absolute top-4 right-3" />
      </search>
      <ul className="w-full pt-3 px-1 rounded-md">
        {USER.currentUserContacts?.map((contact) => (
          <li
            className="cursor-pointer text-white hover:bg-[#2a7fbd] bg-[#0d344f] relative h-[80px] rounded-md tracking-wider flex items-start justify-start px-2 py-1 mb-2 font-semibold"
            key={contact.id}
          >
            <Image
              src="/profile-pic.svg"
              alt="profile-pic"
              width={70}
              height={70}
              className="rounded-full mr-4 shadow-sm shadow-yellow-50"
            />
            <h3 className="text-sm mt-2">{contact.username.toUpperCase()}</h3>
            <span className="text-fuchsia-400 text-[12px] mt-2">
              #{contact.id}
            </span>
            <p className="absolute top-10 text-white left-[92px] text-sm tracking-widest">
              {`> `}
              {getLastUserMessage(contact.username)}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
