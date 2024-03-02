import { create } from "zustand";

type Link = {
  name: string;
  href: string;
};

type Links = {
  user: Link[];
  noUser: Link[];
};

type Store = {
  links: Links;
};

export const useUIStore = create<Store>((set) => ({
  links: {
    user: [
      {
        name: "Messages",
        href: "/messages",
      },
      {
        name: "Contacts",
        href: "/contacts",
      },
      {
        name: "Rooms",
        href: "/rooms",
      },
    ],
    noUser: [
      {
        name: "Login",
        href: "/login",
      },
      {
        name: "Register",
        href: "/signup",
      },
    ],
  },
}));
