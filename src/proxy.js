import { NextResponse } from "next/server";
import React from "react";

const proxy = (request) => {
  const { pathname } = request.nextUrl;

  const isLoggedIn = request.cookies.get("isLoggedIn")?.value == "true";

  if (pathname.startsWith("/add-item")) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
};

export default proxy;

export const config = {
  matcher: ["/add-item/:path*"],
};
