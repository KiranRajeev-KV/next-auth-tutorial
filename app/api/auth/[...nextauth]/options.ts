import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { JWT } from "next-auth/jwt";
import { User as NextAuthUser, Session as NextAuthSession } from "next-auth";

interface User extends NextAuthUser {
    role?: string;
}

interface Session extends NextAuthSession {
    user: {
        role?: string;
    } & NextAuthSession["user"];
}

export const options = {
    providers: [
        Github({
            clientId: process.env.GITHUB_ID || "",
            clientSecret: process.env.GITHUB_SECRET || "",
            profile: (profile) => {
                // console.log("Github profile : ",profile);

                let userRole = "Github User";
                if (profile.email === "kiranrajeevkv@gmail.com") {
                    userRole = "Admin";
                }

                return {
                    ...profile,
                    id: profile.id.toString(),
                    role: userRole
                };
            }
        }),
        Google({
            clientId: process.env.GOOGLE_ID || "",
            clientSecret: process.env.GOOGLE_SECRET || "",
            profile: (profile) => {
                // console.log("Google profile : ",profile);

                const userRole = "Google User";

                return {
                    ...profile,
                    id: profile.sub,
                    role: userRole
                };
            }
        }),
    ],
    callbacks: {
        // JWT callback - this is called when the session is created and updated
        async jwt({ token, user }: { token: JWT, user?: User }) {
          // Check if user exists and assign the role to the token
          if (user) {
            token.role = user.role; // This will assign the role to the JWT token
          }
        //   console.log("JWT Token:", token); 
          return token;
        },
      
        // Session callback - this is called when the session is accessed
        async session({ session, token }: { session: Session, token: JWT }) {
          // Make sure the role from the token is passed into the session
          if (session?.user) {
            session.user.role = token.role as string | undefined;  // This will assign the role to the session user
          }
        //   console.log("Session in callback:", session); 
          return session;
        },
      },
    // pages: {
    //     signIn: "/signin",
    //     signOut: "/signout",
    // }
}
 