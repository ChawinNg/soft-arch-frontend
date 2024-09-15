export type UserRegister = {
  name: string;
  sid: string;
  surname: string;
  email: string;
  password: string;

  confirm_password: string;
};

export type User = Omit<UserRegister, "confirm_password">;

export type UserLogin = Omit<
  UserRegister,
  "confirm_password" | "email" | "name" | "surname"
>;

export type UserMe = {
  id: string;
  name: string;
  sid: string;
  surname: string;
  email: string;
  password: string;
};
