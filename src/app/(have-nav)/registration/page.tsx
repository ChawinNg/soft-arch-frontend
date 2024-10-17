"use client";
import RegistrationList from "@/components/RegistrationList";
import RegistrationSummary from "@/components/RegistrationSummary";
import { useAuth } from "@/context/AuthProvider";
import { getMe } from "@/services/User";
import { useEffect, useState } from "react";

export default function RegistrationPage() {
  const { user, setUser } = useAuth();

  return <div>{user && <RegistrationList user={user} />}</div>;
}
