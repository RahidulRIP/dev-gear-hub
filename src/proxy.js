import { NextResponse } from "next/server";

const proxy = (request) => {
  const { pathname } = request.nextUrl;

  const isLoggedIn = request.cookies.get("isLoggedIn")?.value == "true";

  if (pathname.startsWith("/add-item")) {
    if (!isLoggedIn) {
      //   return NextResponse.redirect(new URL("/login", request.url));

      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
};

export default proxy;

export const config = {
  matcher: ["/add-item/:path*"],
};
