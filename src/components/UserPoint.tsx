"use client";

import { getUserpoint } from "@/services/User";
import { useEffect, useState } from "react";

export default function UserPoint() {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    async function fetchUserPoits() {
      const data = await getUserpoint();
      console.log(data);
      setPoints(data.points);
    }
    fetchUserPoits();
  }, []);
  return (
    <table className="table-auto rounded-xl w-full text-center">
      <tbody>
        <tr className="bg-black text-white text-center">
          <th className="py-3 rounded-t-xl">My Points</th>
        </tr>
        <tr className="bg-white">
          <td className="px-4 py-3 rounded-b-xl">Points : {points}</td>
        </tr>
      </tbody>
    </table>
  );
}
