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
      {enrollment.length === 0 ? null : <ResultTable result={enrollment} />}
    </div>
  );
}
