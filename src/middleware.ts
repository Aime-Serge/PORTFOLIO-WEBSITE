import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "changeme";

// Define which routes require authentication
const PROTECTED_PATHS = ["/admin"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const requiresAuth = PROTECTED_PATHS.some((path) => pathname.startsWith(path));

  if (!requiresAuth) return NextResponse.next();

  const token = req.cookies.get("token")?.value;

  if (!token) {
    console.warn("🔒 Access denied: missing token.");
    return handleUnauthorized(req);
  }

  try {
    // Verify JWT
    jwt.verify(token, JWT_SECRET);
    return NextResponse.next();
  } catch (err) {
    console.error("❌ JWT verification failed:", err);
    return handleUnauthorized(req);
  }
}

/**
 * Handle unauthorized requests differently
 * - Redirects pages to /login
 * - Returns 401 JSON for API routes
 */
function handleUnauthorized(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Handle API routes separately
  if (pathname.startsWith("/api")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Redirect normal users to the login page
  const loginUrl = new URL("/login", req.url);
  return NextResponse.redirect(loginUrl);
}

// Apply middleware only to /admin (and subpaths)
export const config = {
  matcher: ["/admin/:path*"],
};
