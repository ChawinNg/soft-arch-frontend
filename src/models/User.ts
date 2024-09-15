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
    id:string
    Name: string;
    Sid: string;
    Surname: string;
    Email: string;
    Password: string;
}
