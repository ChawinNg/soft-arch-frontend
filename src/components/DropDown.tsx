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

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setDropDown(false);
    }
  }, [setDropDown]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex-1 text-center">{course[section]}</div>
      {dropdown ? (
        <MdOutlineKeyboardArrowUp size={24} />
      ) : (
        <MdOutlineKeyboardArrowDown size={24} />
      )}
      {dropdown && (
        <div
          ref={dropdownRef}
          className="w-[4%] absolute top-60 flex flex-col items-start rounded-lg bg-[#D2D2D2]"
        >
          {Array.from(course).map((sec, i) => (
            <div
              className={`w-full h-8 text-center py-1 hover:bg-[#979797] ${
                i === 0 ? "rounded-t-lg" : ""
              } ${i === course.length - 1 ? "rounded-b-lg" : ""} ${
                i !== 0 && i !== course.length - 1 ? "border-t" : ""
              }`}
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
    </>
  );
}
