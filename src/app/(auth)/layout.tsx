export default function AuthLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <div className="flex justify-center items-center w-screen h-screen bg-[#D9D9D9]">
        {children}
      </div>
    );
  }