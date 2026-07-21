import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {

  const adminAuth = request.cookies.get("admin_auth");


  if (!adminAuth) {

    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );

  }


  return NextResponse.next();

}


export const config = {
  matcher: [
    "/admin/orders/:path*",
  ],
};