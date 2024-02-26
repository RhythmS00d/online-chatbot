import { sampleUsers } from "./sampleUsers";

type Message = {
  id: string;
  username: string;
  messages: {
    from: { id: string; username: string; message: string }[];
    to: { id: string; username: string; message: string }[];
  };
};

export const sampleMessages: Message[] = [
  {
    id: "1234",
    username: "john",
    messages: {
      from: [
        {
          id: "5678x1234",
          username: "lisa",
          message: "How are you?",
        },
        {
          id: "5678x1234",
          username: "lisa",
          message: "Hello There!",
        },
      ],
      to: [
        {
          id: "1234x5678",
          username: "lisa",
          message: "I am great",
        },
        {
          id: "1234x5678",
          username: "lisa",
          message: "Hey There!",
        },
      ],
    },
  },
  {
    id: "5678",
    username: "lisa",
    messages: {
      from: [
        {
          id: "1234x5678",
          username: "john",
          message: "Hello There!",
        },
      ],
      to: [
        {
          id: "5678x1234",
          username: "john",
          message: "Hey There!",
        },
      ],
    },
  },
];
