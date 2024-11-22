import withAuth from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
    function middleware(req) {
        // console.log(req.nextUrl.pathname)
        // console.log(req.nextauth.token?.role);
        if ( req.nextUrl.pathname.startsWith("/admin") && req.nextauth.token?.role === "Admin") {
            return NextResponse.next()
        }
        else {
            return NextResponse.rewrite(new URL("/denied", req.url))
        }

    }
)

export const config = { matcher: ["/admin"]}
