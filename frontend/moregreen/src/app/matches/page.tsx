
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


}