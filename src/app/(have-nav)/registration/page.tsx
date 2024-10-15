"use client";
import RegistrationList from "@/components/RegistrationList";
import RegistrationSummary from "@/components/RegistrationSummary";
import { useState } from "react";

export default function RegistrationPage() {
  const [allPoint, setAllPoint] = useState(0);
  return (
    <div className="flex flex-row justify-center items-start gap-x-20">
      <div className="flex flex-col justify-center items-center py-10 w-2/3">
        <RegistrationList setAllPoint={setAllPoint} />
      </div>
      <RegistrationSummary totalPoints={allPoint} />
    </div>
  );
}
