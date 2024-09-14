export type Course = {
    id: string;
    description: string;
    course_name: string;
    course_full_name: string;
    course_type: string;
    grading_type: string;
    faculty: string;
    midterm_exam_date?: Date | null;
    final_exam_date?: Date | null;
    credit: number;
    course_group_id?: number | null;
  };

  export type Instructor = {
    instructor_id: number;
    full_name: string;
    faculty: string;
    display_name: string;
    email?: string | null;
    phone_number?: string | null;
  };
  
  export type Section = {
    courseId: string;
    id: number;
    section: number;
    capacity: number;
    max_capacity: number;
    room?: string | null;
    timeslots: string[];
    instructors: Instructor[];
  };

  export interface CourseProps {
    course: Course;
    sections: Section[];
  }