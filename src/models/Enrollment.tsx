export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  course_name: string;
  course_credit: number;
  section_id: number;
  section: number;
  points: number;
  round: string;
}

export interface CreateEnrollment {
  user_id: string;
  course_id: string;
  section_id: number;
  section: number;
  points: number;
  round: string;
}

export type EnrollmentSummary = {
  user_id: string;
  course_id: string;
  course_name: string;
  course_credit: number;
  section_id: number;
  section: number;
  round: string;
  points: number;
  result: boolean;
};
