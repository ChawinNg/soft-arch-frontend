import { mockResultInterface } from "@/app/(have-nav)/result/page";

export default function ResultTable({result}:{result:mockResultInterface[]}) {
  const resultHeaders = [
    "Course ID",
    "Name",
    "Credit",
    "Section",
    "Bids",
    "Result",
  ];

  return (
    <div className="p-6 rounded-lg h-[100%] justify-center flex flex-col">
      <table className="min-w-full bg-white shadow-md rounded-lg">
        <thead className="bg-black text-white">
          <tr>
            {resultHeaders.map((header: string, index) => (
              <th className="py-2 px-4" key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        {result ? (
          <tbody>
            {result.map((course: mockResultInterface, index) => (
              <tr key={index} className="border-t">
                <td className="py-2 px-4">{course.course_id}</td>
                <td className="py-2 px-4">{course.course_name}</td>
                <td className="py-2 px-4">{course.course_credit}</td>
                <td className="py-2 px-4">{course.section}</td>
                <td className="py-2 px-4">{course.points}</td>
                <td className="py-2 px-4 text-center">
                  {course.result ? (
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
          { result? result.reduce((carry, course) => carry + course.course_credit, 0): 0}
        </p>
        <p className="text-lg font-bold">
          Coin used: {result? result.reduce((carry, course) => carry + course.points, 0): 0}
        </p>
      </div>
    </div>
  );
}
