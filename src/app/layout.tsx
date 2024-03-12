import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Container } from "@/components/Container/Container";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { AuthContextProvider } from "@/contexts/AuthContext";
import { UIContextProvider } from "@/contexts/UIContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chatbot",
  description: "Online chatbot project",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { showFooter } = store.uiStore;
  return (
    <html lang="en">
      <body className={inter.className + " w-full h-dvh bg-main"}>
        <AuthContextProvider>
          <Container>
            <Header />
            <UIContextProvider>
              {children}
              {/* {showFooter && <Footer />} */}
              <Footer />
            </UIContextProvider>
          </Container>
        </AuthContextProvider>
      </body>
    </html>
  );
}

export default RootLayout;
