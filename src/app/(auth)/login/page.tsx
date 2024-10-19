"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, UserLogin } from "@/models/User";
import { login } from "@/services/User";
import Link from "next/link";

const LoginPage = () => {
  const [tmpUser, setTmpUser] = useState<UserLogin>({} as UserLogin);
  const router = useRouter();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpUser({
      ...tmpUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const res = await login(tmpUser);
    if (res) {
      router.push("/profile");
    }
  };
  return (
    <div className="bg-white w-1/3 h-1/2 flex flex-col rounded-2xl items-center justify-center">
      <div className="text-center header-text text-black m-2">Login</div>
      <form onSubmit={handleSubmit}>
        <div className="m-2 flex flex-col w-full">
          <label htmlFor="Student ID" className="normal-text text-black">
            Student ID
          </label>
          <input
            id="Student ID"
            type="text"
            name="Sid"
            required
            className="text-input"
            onChange={handleFormChange}
          ></input>
        </div>
        <div className="m-2 flex flex-col  w-full">
          <label htmlFor="password" className="normal-text text-black">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="Password"
            required
            className="text-input"
            onChange={handleFormChange}
          ></input>
        </div>

        <div className="flex justify-center mx-2 my-6 w-full">
          <button
            type="submit"
            className="bg-slate-800 text-white normal-text p-2 my-2 rounded-lg w-full h-2/3"
          >
            Login
          </button>
        </div>

        <p className="normal-text">
          Doesn’t have account?{" "}
          <Link
            href={"/register"}
            className="text-[#2400FF] hover:text-blue-400"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
