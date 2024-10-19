"use client";
import { useState } from "react";
import ChangePageButton from "./ChangePageButton";
import ProfilePic from "./ProfilePic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { logout } from "@/services/User";
import { useRouter } from "next/navigation";
const NavBar = () => {
  const [isClicked, setISClicked] = useState<boolean>(false);
  const pathname = usePathname();
  const { user } = useAuth();
  const router = useRouter();
  const handleLogout = async () => {
    const res = await logout();
    console.log(res);
    router.push("/login");
  };
  return (
    <div className="w-full h-full bg-slate-800 flex flex-row items-center justify-between px-5">
      <div className="flex flex-row gap-x-8">
        <ChangePageButton
          pageName="Search for courses"
          active={pathname === "/"}
          url=""
        ></ChangePageButton>
        <ChangePageButton
          pageName="Course Register"
          active={pathname === "/registration"}
          url="registration"
        ></ChangePageButton>
        {user ? (
          <ChangePageButton
            pageName="Result"
            active={pathname === "/result"}
            url="result"
          ></ChangePageButton>
        ) : null}
      </div>

      {user ? (
        <div onClick={() => setISClicked(!isClicked)} className="size-[40px] ">
          <ProfilePic width={40} height={40} />
          {isClicked ? (
            <div className="fixed z-10 normal-text text-center right-0  bg-white flex flex-col justify-center items-center w-32 m-5 divide-y-2 divide-black  border-2 border-slate-800 rounded-lg">
              <div className="w-full p-1 hover:bg-gray-300 rounded-t-lg">
                <Link href={"/profile"} className="">
                  View Profile
                </Link>
              </div>
              <div className="w-full p-1 " onClick={handleLogout}>
                Log out
              </div>
            </div>
          ) : null}
        </div>
      ) : (
        <Link className="normal-text text-white" href={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
};

export default NavBar;
