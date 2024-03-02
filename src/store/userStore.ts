import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
};

type Store = {
  currentUser: string | null;
  userDetails: User | null;
  setCurrentUser: (user: string) => void;
  setUserDetails: (user: User) => void;
};

export const useUserStore = create<Store>((set) => ({
  currentUser: null,
  userDetails: null,
  setCurrentUser: (user: string) => set(() => ({currentUser: user})),
  setUserDetails: (details: User) => set(() => ({userDetails: details}))
}));
