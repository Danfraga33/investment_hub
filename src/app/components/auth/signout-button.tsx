"use server";
import { auth, signOut } from "@/lib/auth";

export async function SignOut() {
  const session = await auth();

  if (!session?.user) return null;
  return (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button type="submit">Sign Out</button>
    </form>
  );
}
