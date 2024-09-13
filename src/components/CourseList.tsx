"use client";
import { Course, Section, CourseProps } from "@/models/CourseProps";
import CourseCard from "./CourseCard";
import CourseHeader from "./CourseHeader";
import { useEffect, useState } from "react";

// const course: Course = {
//   courseId: "2110413",
//   name: "COMPUTER SECURITY",
//   credit: 3,
//   section: [1, 2, 3],
//   day: ["TUE 13:00-16:00", "WED 13:00-16:00", "THU 13:00-16:00"],
//   capacity: [40, 30, 20],
//   maxCapacity: [50, 50, 50],
//   instructor: ["KPR", "AAA", "BBB"],
//   registered: [false, false, false],
// };
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

export default function CourseList() {
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const data = await getCoursesPaginated(1);
        setCourses(data.courses);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return (
    <>
      <CourseHeader />
      {courses.map((courseProps: CourseProps) => (
        <CourseCard
          key={courseProps.course.id}
          course={courseProps.course}
          sections={courseProps.sections}
        />
      ))}
    </>
  );
}
