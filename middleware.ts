import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

const PUBLIC_ROUTES = ['/login', '/register'];

export const config = {
    matcher: ["/", "/battle"],
};

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get("currentUser" as any)?.value;

    if (!PUBLIC_ROUTES.includes(request.nextUrl.pathname) && !currentUser) {
        request.cookies.delete("currentUser");
        const loginUrl = new URL('/login', request.url);

        return NextResponse.redirect(loginUrl.toString());
    }

    return NextResponse.next();
}