import { App_Router } from "@hs-job/types";
import { Button, ButtonProps } from "@hs-job/ui";
import { useRouter } from "next/router";
import { FC } from "react";

type AuthButtonsProps = ButtonProps;

export const AuthButtons: FC<AuthButtonsProps> = (props) => {
  const router = useRouter();

  const handleClickSignInButton = () => {
    router.push(App_Router.SignIn);
  };

  const handleClickSignUpButton = () => {
    router.push(App_Router.SignUp);
  };

  return (
    <>
      <Button {...props} onClick={handleClickSignInButton}>
        Sign In
      </Button>
      <Button {...props} onClick={handleClickSignUpButton}>
        Sign Up
      </Button>
    </>
  );
};
