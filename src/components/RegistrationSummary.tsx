"use client";
import { useState } from "react";
import UserPoint from "./UserPoint";
import { UserMe } from "@/models/User";

export default function RegistrationSummary({
  totalPoints,
  user,
  handleSave,
}: {
  totalPoints: number;
  user: UserMe;
  handleSave: any;
}) {
  const [totalaCredit, setTotalCredit] = useState(0);

  return (
    <div className="flex flex-col gap-y-8 py-10 w-1/6">
      <UserPoint />
      <table className="table-auto rounded-xl w-full text-center">
        <tbody>
          <tr className="bg-black text-white text-center">
            <th className="py-3 rounded-t-xl">Summary</th>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-3">Total Point Used : {totalPoints}</td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-3 rounded-b-xl">
              Total Credits : {totalaCredit}
            </td>
          </tr>
        </tbody>
      </table>

      <button
        className="w-full bg-black text-white py-3 rounded-xl"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}
