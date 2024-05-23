import { ReactNode } from "react";
import { Sidebar } from "../components/DashboardComponents/Sidebar";
import { auth } from "@/lib/auth";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: ReactNode;
}) {
  const session = await auth();
  return <section>{children}</section>;
}
