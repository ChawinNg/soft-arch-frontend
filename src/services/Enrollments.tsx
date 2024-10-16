export async function getUserEnrollment(userId: string) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8080/api/v1/enrollments/${userId}`,
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

export async function deleteEnrollment(courseId: string) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8080/api/v1/enrollments/${courseId}`,
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
