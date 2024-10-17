"use client";

import { UserMe } from "@/models/User";

export default function UserPoint({ user }: { user: UserMe }) {
  return (
    <table className="table-auto rounded-xl w-full text-center">
      <tbody>
        <tr className="bg-slate-800 text-white text-center">
          <th className="py-3 rounded-t-xl">My Points</th>
        </tr>
        <tr className="bg-white">
          <td className="px-4 py-3 rounded-b-xl">Points : {user.points}</td>
        </tr>
      </tbody>
    </table>
  );
}
