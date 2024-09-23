import { useRef, useEffect, useCallback } from "react";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";

interface DropDownProps {
  course: Array<number>;
  dropdown: boolean;
  setDropDown: (value: boolean) => void;
  section: number;
  setSection: (value: number) => void;
}

export default function DropDown({
  course,
  dropdown,
  setDropDown,
  section,
  setSection,
}: DropDownProps) {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropDown(false);
      }
    },
    [setDropDown]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center w-14">
        <div className="w-full flex items-center justify-between pl-2">
          {course[section]}
          {dropdown ? (
            <MdOutlineKeyboardArrowUp size={24} />
          ) : (
            <MdOutlineKeyboardArrowDown size={24} />
          )}
        </div>
        {dropdown && (
          <div
            ref={dropdownRef}
            className="absolute flex flex-col w-full rounded-lg items-start top-14"
          >
            {Array.from(course).map((sec, i) => (
              <div
                className={`w-full p-2 jusitfy-center items-center bg-[#D2D2D2] hover:bg-[#767676] z-30 ${
                  i === 0 ? "rounded-t-lg" : ""
                } ${i === course.length - 1 ? "rounded-b-lg" : ""} `}
                key={sec}
                onClick={() => {
                  setSection(i);
                  setDropDown(false);
                }}
              >
                {sec}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
