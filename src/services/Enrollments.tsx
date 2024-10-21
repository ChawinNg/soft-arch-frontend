import { CreateEnrollment } from "@/models/Enrollment";

export async function getUserEnrollment(userId: string) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/enrollments/user/${userId}`,
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

export async function createEnrollment(enrollment: CreateEnrollment) {
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

export async function updateEnrollment(
  id: string,
  enrollment: CreateEnrollment
) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/enrollments/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(enrollment),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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

export async function deductPoints(id: string, points: number) {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/points/${id}`, {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({ points: points }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deducting points:", error);
    throw new Error("Failed to deduct point from user.");
  }
}

export async function summarizeResult(round: string) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/enrollments/summarize`,
      {
        method: "POST",
        credentials: "include",
        body: JSON.stringify({ round: round }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deducting points:", error);
    throw new Error("Failed to deduct point from user.");
  }
}
