import ChangePageButton from "./ChangePageButton";
import ProfilePic from "./ProfilePic";

const NavBar = () => {
    return ( 
    <div className="w-full h-full bg-black flex flex-row items-center justify-between px-5">
        <div className="flex flex-row">
            <ChangePageButton pageName="Search for courses" active={true}></ChangePageButton>
            <ChangePageButton pageName="Course Register" active={true}></ChangePageButton>
            <ChangePageButton pageName="My Schedule" active={true}></ChangePageButton>
            <ChangePageButton pageName="Registration History" active={true}></ChangePageButton>

        </div>
        <ProfilePic width={40} height={40}/>
    </div> );
}
 
export default NavBar;