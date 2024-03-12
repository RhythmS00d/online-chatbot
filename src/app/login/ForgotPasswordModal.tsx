import { Notification } from "@/components/Notification";
import { type FirebaseActions } from "@/firebase/actions";
import { type Dispatch, type SetStateAction } from "react";

import { IoCloseCircleSharp } from "react-icons/io5";

import { UIStore } from "@/contexts/UIContext";

type ModalProps = {
  open: boolean;
  fbActions: FirebaseActions;
  close: Dispatch<SetStateAction<boolean>>;
};

export const ForgotPasswordModal = ({ open, fbActions, close }: ModalProps) => {
  const { setShowNotification } = UIStore();

  async function handleForgotPassword(formData: FormData) {
    const email = formData.get("forgot-email") as string;

    setShowNotification(true);
    await fbActions.forgotPassword(email);

    setTimeout(() => close(false), 3000);
  }

  return (
    <section
      className={`z-20 size-full text-purple-500 bg-slate-300 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ${
        !open ? "hidden" : "rounded-md flex items-center justify-center"
      }`}
    >
      <Notification text="Email sent!" />
      <div className="size-96 bg-white rounded-md flex items-center justify-around flex-col relative">
        <IoCloseCircleSharp
          className="size-14 cursor-pointer absolute top-4 right-[1/3]"
          onClick={() => close(false)}
        />
        <h1 className="text-2xl font-semibold mt-20">Forgot Password?</h1>
        <form
          action={handleForgotPassword}
          className="flex items-center flex-col justify-center w-full gap-3"
        >
          <input
            type="email"
            name="forgot-email"
            id="forgot-email"
            required
            className="py-4 px-2 my-2 rounded-md outline-none border-[1px] shadow-md w-[90%]"
            placeholder="Enter your email address"
          />
          <button
            type="submit"
            className="w-2/4 h-12 bg-slate-300 rounded font-semibold hover:bg-slate-400"
          >
            Send reset email
          </button>
          <button
            type="button"
            className="w-2/4 h-12 bg-slate-300 rounded font-semibold hover:bg-slate-400"
            onClick={() => close(false)}
          >
            Back
          </button>
        </form>
      </div>
    </section>
  );
};
