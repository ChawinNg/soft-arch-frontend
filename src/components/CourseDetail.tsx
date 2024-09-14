"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Course, Section } from "@/models/CourseProps";
import SectionHeader from "./SectionHeader";
import SectionCard from "./SectionCard";

export default function CourseDetail() {
  const [course, setCourse] = useState<Course | null>();
  const [sections, setSections] = useState<Section[] | null>();
  const params = useParams<{ id: string }>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await getCourseDetail(params.id);
        const sectionData = await getSectionsFromCourseId(params.id);
        setCourse(courseData);
        setSections(sectionData);
      } catch (error) {
        console.error("Error fetching course detail: ", error);
        throw new Error("Failed to fetch course detail");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col m-4 md:m-20 bg-white rounded-lg p-8 md:p-16">
      <div className="flex flex-col">
        <Link
          href={`/`}
          className="bg-black py-2 md:py-3 text-white font-bold rounded-md relative w-24 md:w-28 flex justify-center"
        >
          Back
        </Link>

        {course && (
          <>
            <div className="font-bold flex flex-col md:flex-row justify-between items-center mt-4">
              <div className="text-xl md:text-2xl">
                {course.id} {course.course_name} {`[${course.credit} Credit]`}
              </div>

              <button className="bg-black py-2 md:py-3 px-4 mt-4 md:mt-0 text-white font-bold rounded-md flex justify-center">
                Contact Instructor
              </button>
            </div>

            <div className="mt-6 text-lg">
              <div className="font-bold">Course Description</div>
              <div className="mt-2">{course.description}</div>
            </div>

            <SectionHeader />
            {sections?.map((section) => (<SectionCard section={section}/>))}
          </>
        )}
      </div>
    </div>
  );
}

async function getCourseDetail(id: string) {
  try {
    const response = await fetch(`http://127.0.0.1:8080/api/v1/courses/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw new Error("Failed to fetch courses");
  }
}

async function getSectionsFromCourseId(id: string) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8080/api/v1/sections/courses/${id}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching sections:", error);
    throw new Error("Failed to fetch sections");
  }
}
