import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const token = req.cookies.get("token")?.value;
    const secret = process.env.JWT_SECRET || "changeme";

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      jwt.verify(token, secret);
      return NextResponse.next();
    } catch (err) {
      console.error("JWT verification failed:", err);
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
