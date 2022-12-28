import { Button, ButtonProps } from "@hs-job/ui";
import { useRouter } from "next/router";
import { FC } from "react";

type AuthButtonsProps = ButtonProps;

export const AuthButtons: FC<AuthButtonsProps> = (props) => {
  const router = useRouter();

  const handleClickSignInButton = async () => {
    await router.push("/auth/signin");
  };

  const handleClickSignUpButton = async () => {
    await router.push("/auth/signup");
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
