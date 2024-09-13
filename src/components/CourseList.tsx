import CourseCard, { Course } from "./CourseCard";
import CourseHeader from "./CourseHeader";

const course: Course = {
  courseId: "2110413",
  name: "COMPUTER SECURITY",
  credit: 3,
  section: [1, 2, 3],
  day: ["TUE 13:00-16:00", "WED 13:00-16:00", "THU 13:00-16:00"],
  capacity: [40, 30, 20],
  maxCapacity: [50, 50, 50],
  instructor: ["KPR", "AAA", "BBB"],
  registered: [false, false, false],
};

export default function CourseList() {
  return (
    <>
      <CourseHeader />
      <CourseCard course={course} />
    </>
  );
}
