"use client";
"use client";
import ResultTable from "@/components/ResultTable";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthProvider";
import {
  getUserEnrollment,
  getUserEnrollmentResult,
} from "@/services/Enrollments";
import { Enrollment, EnrollmentSummary } from "@/models/Enrollment";
import Image from "next/image";

export default function Result() {
  const { user } = useAuth();
  const [enrollment, setEnrollment] = useState<EnrollmentSummary[]>(
    [] as EnrollmentSummary[]
  );

  useEffect(() => {
    const fetchUserEnrollment = async () => {
      const res: EnrollmentSummary[] = await getUserEnrollmentResult(user.id);
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
      {enrollment.length === 0 ? <div className="w-2/3 flex flex-col justify-center items-center h-full gap-y-4 bg-white py-8 rounded-xl">
            <div>You didn't have any enroll result!</div>
            <Image
              src={"/img/select_course.jpg"}
              alt={"no image"}
              width={400}
              height={400}
            />
          </div> : <ResultTable result={enrollment} />}
    </div>
  );
}
