import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(request: NextRequest) {


  const memberId = request.cookies.get("memberId")?.value;

  const adminAuth = request.cookies.get("adminAuth")?.value;


  const path = request.nextUrl.pathname;



  // Protect member pages

  if (
    path.startsWith("/member") &&
    path !== "/member/login" &&
    !memberId
  ) {

    return NextResponse.redirect(
      new URL("/member/login", request.url)
    );

  }



  // Protect admin pages

  if (
    path.startsWith("/admin") &&
    path !== "/admin/login" &&
    !adminAuth
  ) {

    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );

  }



  return NextResponse.next();

}



export const config = {

  matcher: [
    "/member/:path*",
    "/admin/:path*",
  ],

};