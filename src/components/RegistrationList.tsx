"use client";
import { Course, Section, CourseProps } from "@/models/CourseProps";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import RegistrationHeader from "./RegistrationHeader";
import RegistrationCard from "./RegistrationCard";
import { deleteEnrollment, getUserEnrollment } from "@/services/Enrollments";
import { Enrollment } from "@/models/Enrollment";
import Image from "next/image";
import { UserMe } from "@/models/User";

export default function RegistrationList({
  setAllPoint,
  user,
}: {
  setAllPoint: Dispatch<SetStateAction<number>>;
  user: UserMe;
}) {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [points, setPoints] = useState<{ [key: string]: number }>(
    enrollments?.reduce((acc, course) => {
      acc[course.id] = 0;
      return acc;
    }, {} as { [key: string]: number })
  );

  const totalPoints = Object.values(points).reduce(
    (sum, value) => sum + value,
    0
  );

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const data = await getUserEnrollment(user.id);
        if (data.data) {
          setEnrollments(data.data);
          console.log(data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
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

  useEffect(() => {
    setAllPoint(totalPoints);
  }, [points]);

  return (
    <>
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
    </>
  );
}
