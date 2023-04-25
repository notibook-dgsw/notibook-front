export type postSignupType = {
  name: string;
  email: string;
  password: string;
};

export type postSigninType = Omit<postSignupType, "name">;
