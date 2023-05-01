export type postSignupType = {
  login_id: string;
  name: string;
  password: string;
};

export type postSigninType = Omit<postSignupType, "name">;
