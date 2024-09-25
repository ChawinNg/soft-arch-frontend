"use client";
import { Course, Section, CourseProps } from "@/models/CourseProps";
import CourseCard from "./CourseCard";
import CourseHeader from "./CourseHeader";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

type CourseData = {
  course: Course;
  sections: Section[];
};
async function getCoursesPaginated(page: number, limit: number = 10) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8080/api/v1/courses/paginated?page=${page}&pageSize=${limit}`,
      {
        method: "GET",
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

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
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const data = await getCoursesPaginated(page, 3);
        setCourses(data.courses || []);
        console.log(data.courses);
      } catch (error) {
        console.error(error);
        setCourses([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [page]);

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
      <div className="flex flex-row p-2 justify-center m-2">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          <IoIosArrowBack
            size={24}
            className={`${page === 1 ? "text-[#d3d3d3]" : ""}`}
          />
        </button>
        {page !== 1 && (
          <button className="text-lg p-2" onClick={() => setPage(page - 1)}>
            {page - 1}
          </button>
        )}
        <button className="text-lg font-bold underline underline-offset-auto p-2">
          {page}
        </button>
        <button className="text-lg p-2" onClick={() => setPage(page + 1)}>
          {page + 1}
        </button>
        <button onClick={() => setPage(page + 1)}>
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </>
  );
}
