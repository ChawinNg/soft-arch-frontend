"use client";
"use client";
import ResultTable from "@/components/ResultTable";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import { getUserEnrollment, getUserEnrollmentResult } from "@/services/Enrollments";
import { Enrollment, EnrollmentSummary } from "@/models/Enrollment";
import { deductPoints } from "@/services/Enrollments";


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
  const { user, setUser } = useAuth();
  const handleConfirmResult = async () => {
    const points = mockResult.reduce(
      (carry, course) => carry + course.points,
      0
    );
    try {
      const response = await deductPoints(user.id, points);
      console.log(response);
    } catch (error) {
      console.error("Error confirming results:", error);
    }
  };


  const [enrollment, setEnrollment] = useState<EnrollmentSummary[]>(
    [] as EnrollmentSummary[]
  );

  useEffect(() => {
    const fetchUserEnrollment = async () => {
      const  res : EnrollmentSummary[] = await getUserEnrollmentResult(user.id);
      console.log(res);
      if (res) {
        setEnrollment(res);
      }
    };
    if (user) {
      fetchUserEnrollment();
    }
  }, [user]);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <ResultTable result={enrollment} />
      <button
        onClick={handleConfirmResult}
        className="bg-slate-800 text-white py-3 px-2 rounded-lg font-bold hover:bg-gray-600"
      >
        Confirm Result
      </button>
    </div>
  );
}
