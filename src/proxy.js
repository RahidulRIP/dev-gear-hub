import { getToken } from "next-auth/jwt";

import { NextResponse } from "next/server";


const proxy = async (request) => {
  const { pathname } = request.nextUrl;

  const session = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const isLoggedIn = request.cookies.get("isLoggedIn")?.value == "true";

  if (pathname.startsWith("/add-item")) {
    if (!isLoggedIn && !session) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
};

export default proxy;

export const config = {
  matcher: ["/add-item/:path*"],
};
