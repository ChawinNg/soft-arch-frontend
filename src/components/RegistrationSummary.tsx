"use client";
import { useState } from "react";
import UserPoint from "./UserPoint";
import { UserMe } from "@/models/User";
import Notification from "./Notification";

export default function RegistrationSummary({
  totalPoints,
  user,
  handleSave,
  isVisible,
}: {
  totalPoints: number;
  user: UserMe;
  handleSave: any;
  isVisible: boolean;
}) {
  const [totalaCredit, setTotalCredit] = useState(0);

  const isDisabled = user.points < totalPoints;

  return (
    <div className="flex flex-col gap-y-8 py-10 w-1/6 font-bold">
      <UserPoint user={user} />
      <table className="table-auto rounded-xl w-full text-center">
        <tbody>
          <tr className="bg-slate-800 text-white text-center">
            <th className="py-3 rounded-t-xl">Summary</th>
          </tr>
          <tr className="bg-white">
            <td className={`px-4 py-3 ${isDisabled ? "text-red-500" : null}`}>
              Total Point Used : {totalPoints}
            </td>
          </tr>
          <tr className="bg-white">
            <td className="px-4 py-3 rounded-b-xl">
              Total Credits : {totalaCredit}
            </td>
          </tr>
        </tbody>
      </table>

      <button
        className={`w-full text-white py-3 rounded-xl hover:bg-gray-600 hover:scale-110 duration-300 ${
          isDisabled ? "bg-red-600" : "bg-slate-800"
        }`}
        onClick={() => {
          handleSave();
        }}
        disabled={isDisabled}
      >
        {isDisabled ? "Points overused!" : "Save"}
      </button>
      {isVisible && <Notification />}
    </div>
  );
}
