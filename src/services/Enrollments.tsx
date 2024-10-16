import { CreateEnrollment } from "@/models/Enrollment";

export async function getUserEnrollment(userId: string) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/enrollments/${userId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching paginated courses:", error);
    throw new Error("Failed to fetch paginated courses");
  }
}

export default async function createEnrollment(enrollment: CreateEnrollment) {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/enrollments`, {
      method: "POST",
      body: JSON.stringify(enrollment),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching paginated courses:", error);
    throw new Error("Failed to fetch paginated courses");
  }
}
export async function deleteEnrollment(courseId: string) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/enrollments/${courseId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching paginated courses:", error);
    throw new Error("Failed to fetch paginated courses");
  }
}
