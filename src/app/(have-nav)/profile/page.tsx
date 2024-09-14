import ProfilePic from "@/components/ProfilePic";

const ProfilePage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="bg-white w-1/2 h-2/3 flex flex-col rounded-2xl ">
        <div className="header-text p-12">Profile</div>
        <div className="flex flex-row w-full">
          <div className="w-1/2 h-full flex items-center justify-center">
            <ProfilePic width={170} height={170} />
          </div>
          <div className="flex flex-col w-1/2 h-full">
            <div className="normal-text p-3">Name : {"scdhsdciu"}</div>
            <div className="normal-text p-3">Student ID : {"scdhsdciu"}</div>
            <div className="normal-text p-3">Email : {"scdhsdciu"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
