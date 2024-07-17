import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(["/ask-question(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  // Ensure the webhook path is excluded from the middleware
  matcher: [
    "/((?!.*\\..*|_next).*)", // Matches all routes except those with a file extension or _next
    "/",
    "/(api|trpc)(.*)",
    "!/api/webhook", // Exclude the webhook path from the matcher
  ],
};
