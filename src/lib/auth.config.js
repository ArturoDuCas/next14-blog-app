export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({token, user}) {
      // TODO: receiving user as undefined, so when user login with credentials, i can not verify if is an admin or not
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin;
      }

      return token;
    },
    async session({session, token}) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({auth, request}) {
      const user = auth?.expires;

      const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // only authenticated users can access the blog page
      if (isOnBlogPage && !user) return false;

      // authenticated users can't access the login page
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    }
  }
}