export type UserRegister = {
  Name: string;
  Sid: string;
  Surname: string;
  Email: string;
  Password: string;

  confirm_password: string;
};

export type User = Omit<UserRegister, "confirm_password">;

export type UserLogin = Omit<
  UserRegister,
  "confirm_password" | "Email" | "Name" | "Surname"
>;

export type UserMe = {
  id: string;
  name: string;
  sid: string;
  surname: string;
  email: string;
  password: string;
};
