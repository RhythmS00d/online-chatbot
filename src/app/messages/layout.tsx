import React from "react";

import MessagesSidebar from "@/components/MessagesSidebar/MessagesSidebar";

export default function MessagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="w-full h-full overflow-hidden flex bg-chat bg-cover bg-no-repeat">
      <MessagesSidebar />
      {children}
    </section>
  );
}
