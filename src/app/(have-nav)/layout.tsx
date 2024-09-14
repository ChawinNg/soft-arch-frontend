import NavBar from "@/components/NavBar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen bg-[#D9D9D9]">
      <div className="w-full h-[10%]">
        <NavBar />
      </div>
      <div className="w-full h-[90%]">{children}</div>
    </div>
  );
}
