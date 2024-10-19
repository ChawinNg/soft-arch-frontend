"use client";
import NavBar from "@/components/NavBar";
import { AuthProvider } from "@/context/AuthProvider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="w-screen h-screen">{children}</div>
    </AuthProvider>
  );
}
