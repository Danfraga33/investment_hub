import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import Navbar from "./components/Navbar";
import { getServerSession } from "next-auth";
const inter = Inter({ subsets: ["latin"] });
import SessionProvider from "./components/SessionProvider";

export const metadata: Metadata = {
  title: "Investment Hub",
  description:
    "Investment Hub is an application that simplifies stock research, providing users with easy access to information about individual stocks, empowering them to make informed investment decisions.",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={cn(
            "min-h-screen font-sans bg-gray-50 antialised grainy",
            inter.className,
          )}
        >
          <Navbar />
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}
