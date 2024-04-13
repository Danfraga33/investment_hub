import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { db } from "@/lib/db";
import GoogleProvider from "next-auth/providers/google";

const prismaClient = new PrismaClient();

interface Credentials {
  email: string;
  password: string;
  id?: number;
  username: string;
}

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
    CredentialsProvider({
      id: "app-login",
      name: "App Login",
      credentials: {
        firstName: {
          label: "First Name",
          type: "text",
        },
        lastName: {
          label: "last Name",
          type: "text",
        },
        email: {
          label: "Email Address",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials: Credentials, req) {
        if (!credentials) {
          throw new Error(`Credentials Error`);
        }
        const { email, username, password, id } = credentials;
        // Add logic here to look up the user from the credentials supplied
        const existingUser = await db.user.findFirst({
          where: {
            email,
          },
        });

        if (existingUser) {
          throw new Error("Email Already in Use");
        }

        const user = await prismaClient.user.create({
          data: {
            username,
            email,
            password: password /* Hash the password before storing it */,
            ...(credentials.id && { id: credentials.id }), // Include ID if provided
          },
        });
        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(prismaClient),
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("fire signin Callback");
      return true;
    },
    async redirect({ url, baseUrl }) {
      console.log("fire redirect Callback");
      return baseUrl;
    },
    async session({ session, user, token }) {
      console.log("fire SESSION Callback");
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("fire jwt Callback");

      // console.log({ token, user, account, profile, isNewUser });
      return token;
    },
  },
});

export { handler as GET, handler as POST };
