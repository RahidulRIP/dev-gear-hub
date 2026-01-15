import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { cookies } from "next/headers";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn() {
      // গুগল লগইন সফল হলে কুকি সেট হবে
      const cookieStore = await cookies();
      cookieStore.set("isLoggedIn", "true", {
        path: "/",
        maxAge: 3600,
        secure: process.env.NODE_ENV === "production", // লাইভ সাইটে সিকিউর থাকবে
      });
      return true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
