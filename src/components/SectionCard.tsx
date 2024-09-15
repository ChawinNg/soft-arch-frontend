import { Instructor, Section } from "@/models/CourseProps";
import { PiPlusSquareBold } from "react-icons/pi";
type SectionProps = {
    section: Section,
}
export default function SectionCard({ section }: SectionProps) {
  return (
    <div className="flex flex-row justify-between items-center bg-gray-200 p-4 font-bold ">
      <div className="flex w-[20%] justify-center items-center">{section.section}</div>
      <div className="flex w-[20%] justify-center items-center flex-col">{section.timeslots && section.timeslots.map((timeslot: string) => (<div>{timeslot}</div>))}</div>
      <div className="flex w-[20%] justify-center items-center">{section.capacity}/{section.max_capacity}</div>
      <div className="flex w-[20%] justify-center items-center">{section.instructors && section.instructors.map((instructor: Instructor) => (instructor.display_name)).join(', ')}</div>
      <div className="flex w-[20%] justify-center items-center"> <PiPlusSquareBold size={32} /></div>
    </div>
  );
}
