"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User, UserRegister } from "@/models/User";
import { register } from "@/services/User";

const RegisterPage = () => {
  const [tmpUser, setTmpUser] = useState<UserRegister>({} as UserRegister);
  const router = useRouter();
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTmpUser({
      ...tmpUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(tmpUser);

    if (tmpUser.confirm_password !== tmpUser.password) {
      console.log("wrong");
    } else {
      const { confirm_password, ...user } = tmpUser;
      const res = await register(user);
      if (res) {
        router.push("/login");
        console.log("done");
      }
    }
  };
  return (
    <div className="bg-white w-1/2 h-2/3 flex flex-col rounded-2xl items-center justify-center">
      <div className="text-center header-text text-black ">Register</div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-3">
          <div className="m-2 flex flex-col">
            <label htmlFor="Email" className="normal-text text-black">
              Email
            </label>
            <input
              id="Email"
              type="text"
              name="Email"
              required
              className="text-input"
              onChange={handleFormChange}
            ></input>
          </div>
          <div className="m-2 flex flex-col">
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

          <div className="m-2 flex flex-col">
            <label htmlFor="display_name" className="normal-text text-black">
              Name
            </label>
            <input
              id="display_name"
              type="text"
              name="Name"
              required
              className="text-input"
              onChange={handleFormChange}
            ></input>
          </div>

          <div className="m-2 flex flex-col">
            <label htmlFor="Surname" className="normal-text text-black">
              Surname
            </label>
            <input
              id="Surname"
              type="text"
              name="Surname"
              className="text-input"
              onChange={handleFormChange}
            ></input>
          </div>

          <div className="m-2 flex flex-col">
            <label htmlFor="password" className="normal-text text-black">
              Password
            </label>
            <input
              id="password"
              type="text"
              name="password"
              required
              className="text-input"
              onChange={handleFormChange}
            ></input>
          </div>

          <div className="m-2 flex flex-col">
            <label
              htmlFor="Confirm password"
              className="normal-text text-black"
            >
              Confirm Password
            </label>
            <input
              id="Confirm password"
              type="text"
              name="confirm_password"
              required
              className="text-input"
              onChange={handleFormChange}
            ></input>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="bg-slate-800 text-white normal-text py-1 px-2 my-3 mx-auto rounded-lg w-2/3 h-2/3"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
