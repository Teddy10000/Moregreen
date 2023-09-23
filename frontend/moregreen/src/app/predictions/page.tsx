import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth" 


export default async function Home(){
    const session = await getServerSession(options)



return(
    <>
    {session? (
        <div></div>
    ):(<div>
        <h1>Please Login</h1>
    </div>)}
    
    </>
)

}