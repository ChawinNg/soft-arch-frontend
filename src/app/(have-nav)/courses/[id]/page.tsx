"use client";
import CourseDetail from "@/components/CourseDetail";
import { useAuth } from "@/context/AuthProvider";
export default function CourseDetailPage() {
  const { user, setUser } = useAuth();
  return (
    <div className="flex flex-col items-center h-full">
      <CourseDetail user={user} />
    </div>
  );
}
