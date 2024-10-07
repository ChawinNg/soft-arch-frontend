import { BsSortDown } from "react-icons/bs";

export default function RegistrationHeader() {
  return (
    <div className="flex flex-row w-full bg-black item-center justify-center h-12 rounded-t-lg">
      <div className="flex w-[15%] text-bold justify-center gap-2 items-center">
        <div className="text-white">Course ID</div>
        <BsSortDown size={16} color="white" />
      </div>
      <div className="flex w-[25%] text-bold justify-center gap-2 items-center">
        <div className="text-white">Name</div>
        <BsSortDown size={16} color="white" />
      </div>
      <div className="flex w-[7%] text-bold justify-center text-white items-center">
        Credit
      </div>
      <div className="flex w-[7%] text-bold justify-center text-white items-center">
        Section
      </div>
      <div className="flex w-[10%] text-bold justify-center gap-2 items-center">
        <div className="text-white">Capacity</div>
        <BsSortDown size={16} color="white" />
      </div>
      <div className="flex w-[15%] text-bold justify-center gap-2 items-center">
        <div className="text-white">Bids</div>
        <BsSortDown size={16} color="white" />
      </div>
      <div className="flex w-[10%] text-bold justify-center text-white items-center">
        Register
      </div>
    </div>
  );
}
