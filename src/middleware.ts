import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const user = request.cookies.get("CurrentUser");

  if (path === "/signup" || path === "/login" || path === "/") {
    if (user.value !== "null")
      return NextResponse.redirect(new URL("/messages", request.url));
  }

  if (path === "/messages" || path === "/contacts" || path === "/rooms") {
    if (user.value === "null")
      return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico)(?![^/]*\\.svg).*)",
  ],
};
