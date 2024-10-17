"use client";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import { PiPlusSquareBold, PiCheckSquareBold } from "react-icons/pi";
import { CourseProps, Instructor } from "@/models/CourseProps";
import Link from "next/link";
import { deleteEnrollment, createEnrollment } from "@/services/Enrollments";
import { CreateEnrollment, Enrollment } from "@/models/Enrollment";
import { useAuth } from "@/context/AuthProvider";
import { useDispatch } from "react-redux";
import { AppDispatch, useAppSelector } from "@/redux/store";
import {
  addEnrollment,
  DeleteEnroll,
  removeEnrollment,
} from "@/redux/features/enrollmentListSlice";

export default function CourseCard({ course, sections }: CourseProps) {
  const [dropdown, setDropdown] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [registered, setRegistered] = useState(false);
  const [id, setId] = useState<string>();
  const { user, setUser } = useAuth();

  const dispatch = useDispatch<AppDispatch>();
  const enrollments = useAppSelector(
    (state) => state.enrollmentList.enrollments
  );

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function checkIsEnroll(id?: string) {
    return enrollments.some((item) => item.id == id);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdown(false);
    }
  };

  const handleAddEnrollment = async () => {
    const newEnrollment: Enrollment = {
      id: "00",
      user_id: user.id,
      course_id: course.id,
      section_id: sections[sectionIndex].id,
      section: sections[sectionIndex].section,
      points: 0,
      round: "2024/1",
    };

    const addEnroll = await createEnrollment(newEnrollment);

    if (!addEnroll) {
      return null;
    }

    setId(addEnroll.id);
    newEnrollment.id = addEnroll.id.toString();

    dispatch(addEnrollment(newEnrollment));
    setRegistered(!registered);
  };

  function handleCourseRemove() {
    if (!id) {
      return null;
    }
    const deleteId: DeleteEnroll = { id: id };
    console.log(deleteId);

    const isDelete = deleteEnrollment(id);
    dispatch(removeEnrollment(deleteId));

    console.log(isDelete);
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    // setRegistered(course.registered[section]);
  }, [sectionIndex]);

  return (
    <div
      className={`flex flex-row m-auto w-[60%] ${
        dropdown ? "bg-gray-300" : "bg-white"
      } item-center h-20 hover:bg-gray-300`}
    >
      <div className="flex w-[18%] text-bold justify-center text-black items-center">
        {course.id}
      </div>
      <div className="flex w-[25%] text-bold justify-center text-black items-center">
        <Link href={`/courses/${course.id}`}> {course.course_name}</Link>
      </div>
      <div className="flex w-[7%] text-bold justify-center text-black items-center">
        {course.credit}
      </div>
      <button
        className="flex w-[7%] text-bold text-black items-center hover:border"
        onClick={() => {
          setDropdown(!dropdown);
        }}
      >
        <DropDown
          course={sections ? sections.map((section) => section.section) : []}
          dropdown={dropdown}
          setDropDown={setDropdown}
          section={sectionIndex}
          setSection={setSectionIndex}
        />
      </button>
      <div className="flex w-[15%] text-bold justify-center text-black items-center flex-row">
        <div>
          {sections &&
            sections[sectionIndex] &&
            sections[sectionIndex].timeslots &&
            sections[sectionIndex].timeslots.map((timeslot: string) => (
              <div key={timeslot}>{timeslot}</div>
            ))}
        </div>
      </div>
      <div className="flex w-[10%] text-bold justify-center text-black items-center">
        {sections && sections[sectionIndex] && sections[sectionIndex].capacity}/
        {sections &&
          sections[sectionIndex] &&
          sections[sectionIndex].max_capacity}
      </div>
      <div className="flex w-[10%] text-bold justify-center text-black items-center">
        {sections &&
          sections[sectionIndex] &&
          sections[sectionIndex].instructors &&
          sections[sectionIndex].instructors
            .map((i: Instructor) => i.display_name)
            .join(", ")}
      </div>
      <button
        className="flex w-[8%] text-bold justify-center text-black items-center"
        onClick={() => {
          if (!checkIsEnroll(id)) {
            handleAddEnrollment();
          } else {
            handleCourseRemove();
          }
        }}
      >
        {/* {course.registered[section] ? ( */}
        {checkIsEnroll(id) ? (
          <PiCheckSquareBold size={32} />
        ) : (
          <PiPlusSquareBold size={32} />
        )}
      </button>
    </div>
  );
}
