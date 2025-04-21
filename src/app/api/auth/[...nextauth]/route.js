import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      if (!profile || !profile.sub || !profile.email) {
        console.error("Perfil inválido:", profile);
        return false;
      }

      const existingUser = await prisma.user.findUnique({
        where: { google_id: profile.sub },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            google_id: profile.sub,
            email: profile.email,
            name: profile.name,
          },
        });
      }

      return true;
    },

    async session({ session, token }) {
      session.user.id = token.sub;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
