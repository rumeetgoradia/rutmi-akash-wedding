import { db } from "@/lib/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { DefaultSession, NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import { env } from "@/lib/env.mjs";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string;
    };
  }
}

export const authOptions: NextAuthOptions = {
  adapter: DrizzleAdapter(db),
  callbacks: {
    session: ({ session, user }) => {
      session.user.id = user.id;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {
          label: "First Name",
          type: "text",
          placeholder: "First Name",
        },
        password: {
          label: "Last Name",
          type: "text",
          placeholder: "Last Name",
        },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied

        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
