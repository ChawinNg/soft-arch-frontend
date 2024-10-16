"use client";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import { PiPlusSquareBold, PiCheckSquareBold } from "react-icons/pi";
import { CourseProps, Instructor } from "@/models/CourseProps";
import Link from "next/link";

export default function CourseCard({ course, sections }: CourseProps) {
  const [dropdown, setDropdown] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  // const [registered, setRegistered] = useState(course.registered[section]);
  const [registered, setRegistered] = useState(false);

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
    // setRegistered(course.registered[section]);
  }, [sectionIndex]);

  useEffect(() => {}, []);

  return (
    <div
      className={`flex flex-row m-auto w-[60%] ${
        dropdown ? "bg-[#979797]" : "bg-white"
      } item-center h-20 hover:bg-[#979797]`}
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
          setRegistered(!registered);
          // course.registered[section] = !course.registered[section];
        }}
      >
        {/* {course.registered[section] ? ( */}
        {registered ? (
          <PiCheckSquareBold size={32} />
        ) : (
          <PiPlusSquareBold size={32} />
        )}
      </button>
    </div>
  );
}
