"use client";
import ProfilePic from "@/components/ProfilePic";
import { checkPassword, getMe, logout, updatePassword } from "@/services/User";
import { useState, useEffect } from "react";
import { UserMe } from "@/models/User";

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentPass, setCurrentPass] = useState<string>("");
  const [newPass, setNewPass] = useState<string>("");
  const [me, setMe] = useState<UserMe>({} as UserMe);
  useEffect(() => {
    const fetchMe = async () => {
      const myself = await getMe();
      if (myself) {
        setMe(myself);
      }
    };

    fetchMe();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const isSame = await checkPassword(currentPass)
    if (isSame) {
      const res = await updatePassword(me.id,newPass);
      if (res) {
        setIsEditing(!isEditing);
      }
    }
    const res = await logout();
    window.location.href = `http://localhost:3000/login`;
  };
  return (
    <div className="w-full h-full flex justify-center items-center">
      {isEditing ? (
        <div className="fixed top-0 left-0 z-10 bg-opacity-50 w-full h-screen bg-gray-600 flex justify-center items-center">
          <div className="bg-white  w-1/5 h-1/3 flex flex-col rounded-2xl justify-center items-center">
            <form>
              <div className="m-2 flex flex-col w-full">
                <label
                  htmlFor="Old Password"
                  className="normal-text text-black"
                >
                  Current Password
                </label>
                <input
                  id="Student ID"
                  type="text"
                  name="Old Password"
                  required
                  className="text-input"
                  onChange={(e) => setCurrentPass(e.target.value)}
                ></input>
              </div>
              <div className="m-2 flex flex-col  w-full">
                <label
                  htmlFor="new-password"
                  className="normal-text text-black"
                >
                  New Password
                </label>
                <input
                  id="new-password"
                  type="text"
                  name="New Password"
                  required
                  className="text-input"
                  onChange={(e) => setNewPass(e.target.value)}
                ></input>
              </div>

              <div className="flex justify-center mx-2 my-6 w-full">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-gray-600 text-white normal-text p-2 m-2 rounded-lg w-full h-2/3"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-slate-800 text-white normal-text p-2 m-2 rounded-lg w-full h-2/3"
                  onClick={(e)=>handleSubmit(e)}
                >
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
      <div className="bg-white w-1/2 h-2/3 flex flex-col rounded-2xl ">
        <div className="header-text pt-10 pl-10 pb-6">Profile</div>
        <div className="flex flex-row w-full">
          <div className="w-1/2 h-full flex flex-col items-center justify-center">
            <ProfilePic width={170} height={170} />
            <div className="flex justify-center w-full h-full">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className=" text-white normal-text py-1 px-2 my-5 mx-auto rounded-lg w-2/3 h-1/2 bg-slate-800 hover:bg-slate-600 "
              >
                Change Password
              </button>
            </div>
          </div>
          <div className="flex flex-col w-1/2 h-full">
            <div className="normal-text p-3">Name : {me.name}</div>
            <div className="normal-text p-3">Student ID : {me.sid}</div>
            <div className="normal-text p-3">Email : {me.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
