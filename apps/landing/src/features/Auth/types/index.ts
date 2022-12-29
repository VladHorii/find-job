export interface SignIn_DTO {
  email: string;
  password: string;
  remember: boolean;
}

export interface SignUp_DTO {
  email: string;
  password: string;
  confirmPassword: string;
}
