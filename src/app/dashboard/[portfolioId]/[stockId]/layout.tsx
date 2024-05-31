import { ReactNode } from "react";
import { Sidebar } from "../../../components/DashboardComponents/Sidebar";
import { auth } from "@/lib/auth";

export default async function DashboardLayout({
  children,
  params, // will be a page or nested layout
}: {
  children: ReactNode;
  params: { portfolioId: string; stockId: string };
}) {
  const session = await auth();

  return (
    <section>
      {session && (
        <Sidebar portfolioId={params.portfolioId} stockId={params.stockId} />
      )}
      {children}
    </section>
  );
}
