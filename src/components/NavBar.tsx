"use client";
import { useState } from "react";
import ChangePageButton from "./ChangePageButton";
import ProfilePic from "./ProfilePic";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavBar = () => {
  const [isClicked, setISClicked] = useState<boolean>(false);
  const pathname = usePathname();
  return (
    <div className="w-full h-full bg-black flex flex-row items-center justify-between px-5">
      <div className="flex flex-row">
        <ChangePageButton
          pageName="Search for courses"
          active={pathname==='/search'}
          url="search"
        ></ChangePageButton>
        <ChangePageButton
          pageName="Course Register"
          active={pathname==='/course-register'}
          url="course-register"
        ></ChangePageButton>
        <ChangePageButton
          pageName="My Schedule"
          active={pathname==='/schedule'}
          url="schedule"
        ></ChangePageButton>
        <ChangePageButton
          pageName="Registration History"
          active={pathname==='/history'}
          url="history"
        ></ChangePageButton>
      </div>

      <div onClick={() => setISClicked(!isClicked)} className="size-[40px] ">
        <ProfilePic width={40} height={40} />
        {isClicked ? (
          <div className="fixed z-10 normal-text text-center right-0  bg-[#D9D9D9] flex flex-col justify-center items-center w-32 m-5 divide-y-2 divide-black  border-2 border-black rounded-lg">
            <div className="w-full p-1 ">
              <Link href={"/profile"} className="hover:text-gray-600">
                View Profile
              </Link>
            </div>
            <div className="w-full p-1 ">Log out</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NavBar;
