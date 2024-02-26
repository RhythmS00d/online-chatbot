import { sampleUsers } from "./sampleUsers";

type Contact = {
  id: string;
  contacts: {
    id: string;
    username: string;
  }[];
};

export const sampleContacts: Contact[] = [
  {
    id: "1234",
    contacts: [
      {
        id: "5678",
        username: "lisa",
      },
      {
        id: "1234",
        username: "john",
      },
    ],
  },
  {
    id: "5678",
    contacts: [
      {
        id: "1234",
        username: "john",
      },
    ],
  },
];