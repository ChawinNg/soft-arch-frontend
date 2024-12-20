import { User, UserLogin } from "@/models/User";

export async function register(userInfo: User) {
  try {
    const response = await fetch("http://localhost:8080/api/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error("can't register");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function login(userInfo: UserLogin) {
  try {
    const response = await fetch("http://localhost:8080/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error("can't login");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function logout() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/logout", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("can't logout");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getMe() {
  try {
    const response = await fetch("http://localhost:8080/api/v1/users/me", {
      method: "GET",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("can't get me");
    }
    const data = await response.json();
    return data.user;
  } catch (err) {
    console.error(err);
  }
}

export async function updatePassword(userId: string,password:string) {
  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/users/${userId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
        }),
        credentials: "include",
      }
    );

    if (!response.ok) {
      throw new Error("can't update user status");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function getUserpoint() {
  try {
    const response = await fetch(`http://localhost:8080/api/v1/points/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("can't update user status");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

export async function checkPassword(password:string) {
  try {
    const response = await fetch("http://localhost:8080/api/v1/users/password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({password:password}),
    });

    if (!response.ok) {
      throw new Error("can't login");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
