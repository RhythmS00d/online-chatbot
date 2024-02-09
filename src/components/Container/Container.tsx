export const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className="w-[70%] h-full mx-auto flex items-center justify-between flex-col bg-white">{children}</main>;
};
