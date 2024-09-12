"use client";

export default function SearchBar() {
  return (
    <div className="flex justify-center">
      <input
        className="rounded-sm m-10 p-2 w-[40%] h-8 text-black font-normal placeholder-gray-400"
        placeholder="Search for courses"
      ></input>
    </div>
  );
}
