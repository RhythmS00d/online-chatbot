import { UIStore } from "@/contexts/UIContext";

export const Notification = ({ text }: { text: string }) => {
  const { showNotification } = UIStore();
  return (
    <div
      className={`absolute top-40 right-10 animate-expand origin-right w-64 h-20 bg-white text-gray-800 shadow-2xl text-xl z-50 flex items-center rounded-md px-3 font-semibold ${
        showNotification ? "" : "hidden"
      }`}
    >
      {text}
    </div>
  );
};
