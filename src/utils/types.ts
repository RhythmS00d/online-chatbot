export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
};

export type User = {
  id: string;
  name: string;
  email: string;
  contacts: Contact[];
};

type Link = {
  name: string;
  href: string;
};

type Links = {
  user: Link[];
  noUser: Link[];
};

export type UIStore = {
  links: Links;
  loading: boolean;
  changeLoading: () => void;
};

export type UserStore = {
  currentUser: string | null;
  userDetails: User | null;
  setCurrentUser: (user: string) => void;
  setUserDetails: (user: User) => void;
};

export type SignupDetails = {
  email: string;
  password: string;
  username: string;
  name: string;
  "confirm password": string;
};
