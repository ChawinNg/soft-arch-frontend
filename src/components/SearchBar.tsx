"use client";

import { useState } from "react";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-center">
      <input
        className="rounded-xl m-10 p-2 w-[40%] h-16 text-black font-normal placeholder-gray-400"
        placeholder="Search for courses"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
}
