"use client";
import RegistrationList from "@/components/RegistrationList";
import RegistrationSummary from "@/components/RegistrationSummary";
import { getMe } from "@/services/User";
import { useEffect, useState } from "react";

export default function RegistrationPage() {
  const [allPoint, setAllPoint] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getCurrentUser() {
      const data = await getMe();
      console.log(data);
      if (data) {
        setUser(data);
      }
    }
    getCurrentUser();
  }, []);
  return (
    <div className="flex flex-row justify-center items-start gap-x-20">
      <div className="flex flex-col justify-center items-center py-10 w-2/3">
        {user && <RegistrationList setAllPoint={setAllPoint} user={user} />}
      </div>
      {user && <RegistrationSummary totalPoints={allPoint} user={user} />}
    </div>
  );
}
