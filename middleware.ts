import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/",
};

export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (
      user === process.env.BASICAUTH_USER &&
      pwd === process.env.BASICAUTH_PASS
    ) {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/basicauth";

  return NextResponse.rewrite(url);
}
