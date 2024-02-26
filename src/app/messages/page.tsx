import React from "react";

export default function Messages() {
  return (
    <section className=" flex items-center justify-center mx-auto w-full">
      <h1 className="text-2xl text-white flex gap-2 font-light">
        <small>{`> `}</small> Select a message to open
      </h1>
    </section>
  );
}
