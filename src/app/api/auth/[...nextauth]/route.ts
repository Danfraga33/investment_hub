import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID ?? "",
      clientSecret: process.env.GITHUB_SECRET ?? "",
    }),
  ],
});
export { authOptions as GET, authOptions as POST };

// callbacks: {
//   async signIn({ account, profile }) {
//     if (!profile?.email) {
//       throw new Error("No Profile");
//     }

//     await prisma.user.upsert({
//       where: {
//         email: profile.email,
//       },
//       create: {
//         email: profile.email,
//         name: profile.name ?? "",
//       },
//       update: {
//         name: profile.name,
//       },
//     });
//     return true;
//   },
// },
