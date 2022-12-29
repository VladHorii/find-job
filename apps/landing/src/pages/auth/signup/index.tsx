import { AuthLayout } from "@/components";
import { SignUp } from "@/features";

const Index = () => {
  return (
    <>
      SignUp
      <AuthLayout>
        <SignUp />
      </AuthLayout>
    </>
  );
};

export default Index;
