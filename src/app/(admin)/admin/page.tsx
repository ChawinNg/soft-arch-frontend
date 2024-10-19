export default function AdminPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="bg-white rounded-xl w-1/2 h-1/2 flex flex-col justify-around items-center">
        <div className="font-bold text-4xl">Welcome to admin page!</div>
        <select className="w-1/3 px-6 py-4 rounded-xl border-gray-600 border-2">
          <option value="option1">2024/1</option>
          <option value="option2">2024/2</option>
        </select>
        <button className="bg-slate-800 px-6 py-4 text-white font-bold hover:bg-gray-600 rounded-xl w-1/3">
          Summarize Registration!
        </button>
      </div>
    </div>
  );
}
