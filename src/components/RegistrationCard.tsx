"use client";
import { useEffect, useRef, useState } from "react";
import DropDown from "./DropDown";
import { PiXSquareBold } from "react-icons/pi";
import { RegistrationProps } from "@/models/CourseProps";
import Link from "next/link";

export default function RegistrationCard({
  enrollment,
  onPointChange,
  onRemoveEnrollment,
}: RegistrationProps) {
  const [registered, setRegistered] = useState(false);

  useEffect(() => {
    onPointChange(enrollment.course_id, enrollment.section, enrollment.points);
  }, []);

  return (
    <div
      className={`flex flex-row w-full justify-center ${"bg-white"} item-center h-20 hover:bg-gray-300`}
    >
      <div className="flex w-[15%] text-bold justify-center text-black items-center">
        {enrollment.course_id}
      </div>
      <div className="flex w-[25%] text-bold justify-center text-black items-center">
        <Link href={`/courses/${enrollment.course_id}`}>
          {enrollment.course_name}
        </Link>
      </div>
      <div className="flex w-[7%] text-bold justify-center text-black items-center">
        {enrollment.course_credit}
      </div>
      <div className="flex w-[15%] text-bold justify-center text-black items-center">
        {enrollment.section}
      </div>
      <div className="flex w-[15%] text-bold justify-center text-black items-center">
        <input
          type="text"
          className="w-1/2 px-2 border-black border-2 rounded-lg"
          defaultValue={enrollment.points}
          onChange={(e) => {
            onPointChange(
              enrollment.course_id,
              enrollment.section,
              parseInt(e.target.value) || 0
            );
          }}
        ></input>
      </div>
      <button
        className="flex w-[10%] text-bold justify-center text-black items-center"
        onClick={() => {
          setRegistered(!registered);
          // course.registered[section] = !course.registered[section];
        }}
      >
        {/* {course.registered[section] ? ( */}
        <PiXSquareBold
          size={32}
          onClick={() => onRemoveEnrollment(enrollment.id)}
        />
      </button>
    </div>
  );
}
