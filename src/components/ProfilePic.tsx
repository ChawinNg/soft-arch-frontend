import Image from "next/image";

const ProfilePic = ({width,height, src }: {width:number,height:number, src?: string }) => {
  return (
    <div className="size-30 relative flex items-center">
      <Image
        // src={user.profileImg}
        src="/img/hamtaro.png"
        // fill={true}
        width={width}
        height={height}
        alt="profile-pic"
        className="rounded-full"
      />
    </div>
  );
};

export default ProfilePic;
