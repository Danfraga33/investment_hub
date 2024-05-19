import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect(new URL("/api/auth/signin", request.url));
  }
}

export const config = {
  matcher: ["/Dashboard/:path*"],
};

/**
 * 2. Prisma Adapter inclusion, renders the entire login poge disabled
 * 3. After signout URL
 */
