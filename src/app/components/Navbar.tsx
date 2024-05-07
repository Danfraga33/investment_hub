"use client";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import { UserNav } from "./DashboardComponents/UserNav";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200 ">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Investment Hub</span>
          </Link>

          {/* <StrategySwitch /> */}
          {/* To do: add mobile navbar */}
          <div className="hidden items-center space-x-4 sm:flex">
            <>
              <Link
                href="/pricing"
                className={buttonVariants({
                  variant: "ghost",
                  size: "sm",
                })}
              >
                Pricing
              </Link>

              {!session ? (
                <button
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                  onClick={() => signIn()}
                >
                  Sign In
                </button>
              ) : (
                <>
                  <Link href="/Dashboard">
                    <button
                      className={buttonVariants({
                        variant: "ghost",
                        size: "sm",
                      })}
                    >
                      Dashboard
                    </button>
                  </Link>
                  <UserNav />
                </>
              )}
            </>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
