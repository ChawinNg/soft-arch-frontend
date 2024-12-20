import { EnrollmentSummary } from "@/models/Enrollment";

export default function ResultTable({
  result,
}: {
  result: EnrollmentSummary[];
}) {
  const resultHeaders = [
    "Course ID",
    "Name",
    "Credit",
    "Section",
    "Round",
    "Bids",
    "Result",
  ];

  return (
    <div className="p-6 rounded-lg h-[100%] justify-center flex flex-col">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-slate-800 text-white">
          <tr>
            {resultHeaders.map((header: string, index) => (
              <th
                className={`py-2 px-4 ${index === 0 && "rounded-tl-lg"} ${
                  index === resultHeaders.length - 1 && "rounded-tr-lg"
                }`}
                key={index}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {result ? (
          <tbody>
            {result.map((enrollSum: EnrollmentSummary, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{enrollSum.course_id}</td>
                <td className="py-2 px-4">{enrollSum.course_name}</td>
                <td className="py-2 px-4">{enrollSum.course_credit}</td>
                <td className="py-2 px-4">{enrollSum.section}</td>
                <td className="py-2 px-4">{enrollSum.round}</td>
                <td className="py-2 px-4">{enrollSum.points}</td>
                <td className="py-2 px-4 text-center">
                  {enrollSum.result ? (
                    <span className="text-green-500 text-xl">✔</span>
                  ) : (
                    <span className="text-red-500 text-xl">✘</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <></>
        )}
      </table>

      <div className="mt-6">
        <p className="text-lg font-bold">
          Total credit:{" "}
          {result
            ? result.reduce((carry, enrollSum) => carry + enrollSum.course_credit, 0)
            : 0}
        </p>
        <p className="text-lg font-bold">
          Coin used:{" "}
          {result
            ? result.reduce((carry, enrollSum) => carry + enrollSum.points, 0)
            : 0}
        </p>
      </div>
    </div>
  );
}
