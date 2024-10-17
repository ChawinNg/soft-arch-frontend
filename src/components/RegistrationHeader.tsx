import { BsSortDown } from "react-icons/bs";

export default function RegistrationHeader() {
  return (
    <div className="flex flex-row w-full bg-slate-800 item-center justify-center py-4 rounded-t-lg font-bold">
      <div className="flex w-[15%] text-bold justify-center gap-2 items-center">
        <div className="text-white">Course ID</div>
      </div>
      <div className="flex w-[25%] text-bold justify-center gap-2 items-center">
        <div className="text-white">Name</div>
      </div>
      <div className="flex w-[7%] text-bold justify-center text-white items-center">
        Credit
      </div>
      <div className="flex w-[15%] text-bold justify-center text-white items-center">
        Section
      </div>
      <div className="flex w-[15%] text-bold justify-center gap-2 items-center">
        <div className="text-white">Bids</div>
      </div>
      <div className="flex w-[10%] text-bold justify-center text-white items-center">
        Register
      </div>
    </div>
  );
}
