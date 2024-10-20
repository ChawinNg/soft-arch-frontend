"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Course, Section, Instructor } from "@/models/CourseProps";
import SectionHeader from "./SectionHeader";
import SectionCard from "./SectionCard";
import SendEmailModal from "./SendEmailModal";

function getUniqueInstructors(data: Section[]): Instructor[] {
  const uniqueInstructorsMap = new Map<number, Instructor>();

  // Check if data is an array and has sections
  if (!Array.isArray(data)) {
      console.error('Expected data to be an array of sections');
      return [];
  }

  data.forEach((section) => {
      // Check if the section has instructors and that it is an array
      if (section.instructors && Array.isArray(section.instructors)) {
          section.instructors.forEach((instructor) => {
              if (instructor && instructor.instructor_id) {
                  console.log(instructor);
                  uniqueInstructorsMap.set(instructor.instructor_id, instructor);
              } else {
                  console.warn('Invalid instructor object', instructor);
              }
          });
      } else {
          console.warn('Instructors is not an array or is missing for section', section);
      }
  });

  console.log("Unique Instructors Map:", uniqueInstructorsMap);
  // Convert the Map values back to an array
  return Array.from(uniqueInstructorsMap.values());
}


export default function CourseDetail() {
  const [course, setCourse] = useState<Course | null>();
  const [sections, setSections] = useState<Section[]>([] as Section[]);
  const [isContacting, setIsContacting] = useState<boolean>(false);
  const [instructors, setInstructors] = useState<Instructor[]>(
    [] as Instructor[]
  );
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseData = await getCourseDetail(params.id);
        const sectionData = await getSectionsFromCourseId(params.id);
        setCourse(courseData);
        setSections(sectionData);
        const inst:Instructor[] = getUniqueInstructors(sectionData);
        setInstructors(inst);
      } catch (error) {
        console.error("Error fetching course detail: ", error);
        throw new Error("Failed to fetch course detail");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <SendEmailModal
        isOpen={isContacting}
        onClose={() => setIsContacting(false)}
        instructors={instructors}
      />
      <div className="w-[90%] flex flex-col bg-white rounded-b-lg h-full p-8 md:p-16">
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

                <button
                  onClick={() => {
                    setIsContacting(true);
                    console.log(instructors);
                  }}
                  className="bg-black py-2 md:py-3 px-4 mt-4 md:mt-0 text-white font-bold rounded-md flex justify-center"
                >
                  Contact Instructor
                </button>
              </div>

              <div className="mt-6 text-lg">
                <div className="font-bold">Course Description</div>
                <div className="mt-2">{course.description}</div>
              </div>

              <SectionHeader />
              {sections?.map((section) => (
                <SectionCard section={section} />
              ))}
            </>
          )}
        </div>
      </div>
    </>
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
