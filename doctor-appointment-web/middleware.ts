import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { isAuthenticated } = getKindeServerSession();

  console.log('request.url', request.url);

  if (!(await isAuthenticated())) {
    // https://kinde.com/docs/developer-tools/nextjs-sdk/#protecting-routes
    // KINDE: If you want the user to be redirected back to that route after signing in, you can set post_login_redirect_url in the search params of the redirect.
    return NextResponse.redirect(
      new URL('/api/auth/login?post_login_redirect_url=/', request.url),
    );
  }
}

// See "Matching Paths" below to learn more
// https://kinde.com/docs/developer-tools/nextjs-sdk/#default-page-protection
export const config = {
  matcher: ['/details/:path*'],
};
