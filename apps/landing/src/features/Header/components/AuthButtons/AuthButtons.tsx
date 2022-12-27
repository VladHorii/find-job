import { Button, ButtonProps } from "@hs-job/ui";
import { useRouter } from "next/router";
import { FC } from "react";

type AuthButtonsProps = Pick<ButtonProps, "variant">;

export const AuthButtons: FC<AuthButtonsProps> = ({ variant }) => {
  const router = useRouter();

  const handleClickSignInButton = async () => {
    await router.push("/signin");
  };

  const handleClickSignUpButton = async () => {
    await router.push("/signup");
  };

  return (
    <>
      <Button variant={variant} onClick={handleClickSignInButton}>
        Sign In
      </Button>
      <Button variant={variant} onClick={handleClickSignUpButton}>
        Sign Up
      </Button>
    </>
  );
};
