"use client"
import ResultTable from "@/components/ResultTable";
import { deductPoints } from "@/services/Enrollments";

export type mockResultInterface = {
  course_id: string;
  course_name: string;
  course_credit: number;
  section: number;
  points: number;
  result: boolean;
};

const mockResult = [
  {
    course_id: "2110413",
    course_name: "COMP SECURITY",
    course_credit: 3,
    section: 21,
    points: 5,
    result: true,
  },
  {
    course_id: "2110414",
    course_name: "DATA SCIENCE",
    course_credit: 4,
    section: 11,
    points: 10,
    result: false,
  },
];
export default function Result() {
    const handleConfirmResult = async () => {
        const points = mockResult.reduce((carry, course) => carry + course.points, 0)
        try {
            //   const response = await deductPoints(user_id, points);
        } catch (error) {
          console.error("Error confirming results:", error);
        }
      };
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300 flex-col">
      <ResultTable result={mockResult}/>
      <button onClick={handleConfirmResult} className="bg-black text-white py-3 px-2 rounded-lg hover:opacity-70">Confirm Result</button>
    </div>
  );
}
