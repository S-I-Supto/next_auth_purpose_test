import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from '../../../libs/prismadb'

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOGGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET
        }),],
    debug: process.env.NODE_ENV === 'development',
    secret: process.env.NEXT_AUTH_SECRET,
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }