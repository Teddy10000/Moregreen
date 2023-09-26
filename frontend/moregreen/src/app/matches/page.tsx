<<<<<<< HEAD
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



export default function ClientPage(){
    const {data:session} = useSession({
        required:true,
        onUnauthenticated(){
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <section>
            <h1 ></h1>
        </section>
    )
=======
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";



export default function ClientPage(){
    const {data:session} = useSession({
        required:true,
        onUnauthenticated(){
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <section>
            <h1 ></h1>
        </section>
    )
>>>>>>> 205af39edd9b980b34dc296111e7cfc7eb057a24
}