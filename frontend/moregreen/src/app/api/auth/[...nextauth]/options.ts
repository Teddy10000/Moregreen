import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        
          authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials:{
                username:{
                    label:"Username:",
                    type:"text",
                    placeholder:"your-username"
                }, 

                password:{
                    label:"Password",
                    type:"password",
                    placeholder:"mine password"
                }
            },
            async authorize(credentials) {
                
                
                const user = {id:"52", name:"Teddy",password:"DFNKSDFNDS"}

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                }
                else {
                    return null
                }
            }
        })
      ], 

      
    
}