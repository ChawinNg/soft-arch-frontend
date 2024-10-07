"use client";
import { Course, Section, CourseProps } from "@/models/CourseProps";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import RegistrationHeader from "./RegistrationHeader";
import RegistrationCard from "./RegistrationCard";

type CourseData = {
  course: Course;
  sections: Section[];
};
async function getCoursesPaginated(page: number) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8080/api/v1/courses/paginated`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching paginated courses:", error);
    throw new Error("Failed to fetch paginated courses");
  }
}

export default function RegistrationList({
  setAllPoint,
}: {
  setAllPoint: Dispatch<SetStateAction<number>>;
}) {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [points, setPoints] = useState<{ [key: string]: number }>(
    courses.reduce((acc, course) => {
      acc[course.course.id] = 0;
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
        const data = await getCoursesPaginated(1);
        setCourses(data.courses);
        console.log(data.courses);
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

  useEffect(() => {
    setAllPoint(totalPoints);
  }, [points]);

  return (
    <>
      <RegistrationHeader />
      {courses.map((courseProps: CourseProps) => (
        <RegistrationCard
          key={courseProps.course.id}
          course={courseProps.course}
          sections={courseProps.sections}
          onPointChange={handlePointsChange}
        />
      ))}
    </>
  );
}
