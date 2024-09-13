"use client";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import { PiPlusSquareBold, PiCheckSquareBold } from "react-icons/pi";

export type Course = {
  courseId: string;
  name: string;
  credit: number;
  section: Array<number>;
  day: Array<string>;
  capacity: Array<number>;
  maxCapacity: Array<number>;
  instructor: Array<string>;
  registered: Array<boolean>;
};

interface CourseProps {
  course: Course;
}

export default function CourseCard({ course }: CourseProps) {
  const [dropdown, setDropdown] = useState(false);
  const [section, setSection] = useState(0);
  const [registered, setRegistered] = useState(course.registered[section]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setRegistered(course.registered[section]);
  }, [section]);

  return (
    <div
      className={`flex flex-row m-auto w-[60%] ${
        dropdown ? "bg-[#979797]" : "bg-white"
      } item-center h-12 hover:bg-[#979797]`}
    >
      <div className="flex w-[18%] text-bold justify-center text-black items-center">
        {course.courseId}
      </div>
      <div className="flex w-[25%] text-bold justify-center text-black items-center">
        {course.name}
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
          course={course.section}
          dropdown={dropdown}
          setDropDown={setDropdown}
          section={section}
          setSection={setSection}
        />
      </button>
      <div className="flex w-[15%] text-bold justify-center text-black items-center">
        <div>{course.day[section]}</div>
      </div>
      <div className="flex w-[10%] text-bold justify-center text-black items-center">
        {course.capacity[section]}/{course.maxCapacity[section]}
      </div>
      <div className="flex w-[10%] text-bold justify-center text-black items-center">
        {course.instructor[section]}
      </div>
      <button
        className="flex w-[8%] text-bold justify-center text-black items-center"
        onClick={() => {
          setRegistered(!registered);
          course.registered[section] = !course.registered[section];
        }}
      >
        {course.registered[section] ? (
          <PiCheckSquareBold size={32} />
        ) : (
          <PiPlusSquareBold size={32} />
        )}
      </button>
    </div>
  );
}
