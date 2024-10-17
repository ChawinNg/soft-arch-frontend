"use client";
import { useEffect, useState } from "react";
import RegistrationHeader from "./RegistrationHeader";
import RegistrationCard from "./RegistrationCard";
import {
  deleteEnrollment,
  getUserEnrollment,
  updateEnrollment,
} from "@/services/Enrollments";
import { CreateEnrollment, Enrollment } from "@/models/Enrollment";
import Image from "next/image";
import { UserMe } from "@/models/User";
import RegistrationSummary from "./RegistrationSummary";

export default function RegistrationList({ user }: { user: UserMe }) {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [points, setPoints] = useState<{ [key: string]: number }>(
    enrollments?.reduce((acc, course) => {
      acc[course.id] = course.points;
      return acc;
    }, {} as { [key: string]: number })
  );

  const totalPoints = Object.values(points).reduce(
    (sum, value) => sum + value,
    0
  );

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await getUserEnrollment(user.id);
        if (data.data) {
          setEnrollments(data.data);
          console.log(data.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCourses();
  }, []);

  function handlePointsChange(courseId: string, newPoints: number) {
    setPoints((prevPoints) => ({
      ...prevPoints,
      [courseId]: newPoints, // Update points for the specific course
    }));
  }

  function handleCourseRemove(enrollmentId: string) {
    const newArray = enrollments.filter((item) => item.id !== enrollmentId);
    setEnrollments(newArray);
    deleteEnrollment(enrollmentId);
  }

  function handleSave() {
    for (const enrollment of enrollments) {
      const newEnroll: CreateEnrollment = {
        user_id: user.id,
        course_id: enrollment.course_id,
        section_id: enrollment.section_id,
        section: enrollment.section,
        points: points[enrollment.course_id],
        round: "2024/1",
      };
      const updateObj = updateEnrollment(enrollment.id, newEnroll);
      console.log(updateObj);
    }
  }

  return (
    <div className="flex flex-row justify-center items-start gap-x-20">
      <div className="flex flex-col justify-center items-center py-10 w-2/3">
        {enrollments.length != 0 ? (
          <div className="w-full">
            <RegistrationHeader />
            {enrollments.map((enrollmentProps: Enrollment) => (
              <RegistrationCard
                key={enrollmentProps.id}
                enrollment={enrollmentProps}
                onPointChange={handlePointsChange}
                onRemoveEnrollment={handleCourseRemove}
              />
            ))}
          </div>
        ) : (
          <div className="w-2/3 flex flex-col justify-center items-center h-full gap-y-4 bg-white py-8 rounded-xl">
            <div>You didn't select any course yet!</div>
            <Image
              src={"/img/select_course.jpg"}
              alt={"no image"}
              width={400}
              height={400}
            />
          </div>
        )}
      </div>
      <RegistrationSummary
        totalPoints={totalPoints}
        user={user}
        handleSave={handleSave}
      />
    </div>
  );
}
