import { H1 } from "@hs-job/ui";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>
      <H1>The page not found.</H1>
      <Link href={"/"}>Go back</Link>
    </div>
  );
};

export default PageNotFound;
