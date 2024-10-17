"use client";
import RegistrationList from "@/components/RegistrationList";
import { useAuth } from "@/context/AuthProvider";

export default function RegistrationPage() {
  const { user, setUser } = useAuth();

  return <div>{user && <RegistrationList user={user} />}</div>;
}
