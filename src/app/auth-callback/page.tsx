"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Loader2 } from "lucide-react";
import { currentUser, useUser } from "@clerk/nextjs";
import db from "@/db/page";
import { useEffect } from "react";

const Page = () => {
  // Sync user to DB
  /**
   * 1. User is here as he is not synced to DB
   * 2. db.user.create({})
   * 3. Once complete, push user to dashboaad.
   *
   * PROBLEM:
   */
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  // If db has user id,

  useEffect(() => {
    const AddUserToDB = async () => {
      const { user } = useUser();

      await db.user.create({
        data: {
          name: user?.fullName,
          email: user?.primaryEmailAddress?.emailAddress,
        },
      });
    };
  }, []);
  // origin ?
  // console.log("ORIGIN", origin);

  // check if the user is in the database

  // if add to DB is successful, push to /dashboard

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
