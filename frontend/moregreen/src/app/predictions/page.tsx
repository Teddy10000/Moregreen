<<<<<<< HEAD
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth" 


export default async function Home(){
    const session = await getServerSession(options)



return(
    <>
    {session? (
        <div>
                <h1>okay sjfbsdjfdbjdk</h1>
        </div>
    ):(<div>
        <h1>Please go login to see this section</h1>
    </div>)}
    
    </>
)

=======
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

>>>>>>> 205af39edd9b980b34dc296111e7cfc7eb057a24
}