export default function SectionHeader() {
  return (
    <div className="flex flex-row justify-between items-center mt-6 bg-slate-800 rounded-t-lg p-4 font-bold text-white">
      <div className="flex w-[20%] justify-center items-center">Section</div>
      <div className="flex w-[20%] justify-center items-center">Day</div>
      <div className="flex w-[20%] justify-center items-center">Capacity</div>
      <div className="flex w-[20%] justify-center items-center">Instructor</div>
      <div className="flex w-[20%] justify-center items-center">Register</div>
    </div>
  );
}
