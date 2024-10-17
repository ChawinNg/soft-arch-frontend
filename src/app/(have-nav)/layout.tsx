"use client";
import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/context/AuthProvider";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="w-screen h-screen">
        <div className="w-full h-[10%]">
          <NavBar />
        </div>
        <div className="w-full h-[90%]">{children}</div>
      </div>
    </AuthProvider>
  );
}
