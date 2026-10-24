import { NextRequest, NextResponse, userAgent } from "next/server";

// Serves a different product detail layout per device: desktop browsers get a
// rewrite to the two-column view at `/product/[id]/desktop`, while mobile and
// tablet keep the single-column page at `/product/[id]`. A rewrite keeps the
// public URL stable and lets both pages stay statically rendered.
export function proxy(request: NextRequest) {
    const { device } = userAgent(request);
    const isMobileViewport = device.type === "mobile" || device.type === "tablet";

    if (isMobileViewport) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `${url.pathname}/desktop`;
    return NextResponse.rewrite(url);
}

export const config = {
    matcher: "/product/:id",
};
