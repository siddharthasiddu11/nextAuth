import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";


const handler = NextAuth({
   providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "abc@123.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const username = credentials?.username;
        const password = credentials?.password;
        console.log(username);
        console.log(password);
        // db request to check if the username and password is correct

        const user = {
            name: "siddu",
            id: "1",
            username: "siddu@gmail.com"
        }
        if(user) {
            return user;
        }
        else {
            return null;
        }

        
      },
    }),
     GoogleProvider({
    clientId: "asd",
    clientSecret: "123445",
  }),
  GitHubProvider({
    clientId: "asd",
    clientSecret: "123",
  }),
  ],
})

export const GET = handler;
export const POST = handler;