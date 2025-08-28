import { NextResponse } from "next/server";
import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/"],
    afterAuth(auth, req) {
      // Kullanıcı giriş yapmış ve public route'da ise
      if (auth.userId && auth.isPublicRoute) {
        let path = "/select-org";

        if (auth.orgId) {
          path = `/organization/${auth.orgId}`;
        }

        const orgSelection = new URL(path, req.url);
        return NextResponse.redirect(orgSelection);
      }

      // Kullanıcı giriş yapmamış ve protected route'da ise
      if (!auth.userId && !auth.isPublicRoute) {
        return redirectToSignIn({ returnBackUrl: req.url });
      }

      // Kullanıcı giriş yapmış ama organizasyon seçmemiş ise
      if (auth.userId && !auth.orgId && req.nextUrl.pathname !== '/select-org') {
        const orgSelection = new URL("/select-org", req.url);
        return NextResponse.redirect(orgSelection);
      }
    }
});
  
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 