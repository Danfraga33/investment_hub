import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <MaxWidthWrapper className="flex justify-center items-center h-screen ">
      <SignIn />;
    </MaxWidthWrapper>
  );
}
