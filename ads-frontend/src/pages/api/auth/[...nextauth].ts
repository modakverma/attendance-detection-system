import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: "c7ca2db7db0bfca797c2",
      clientSecret: "c024bee5b8d1e74508f5df4ddb21f41456946b93",
    }),
  ],
};

export default NextAuth(authOptions);
