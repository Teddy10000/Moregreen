
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth" 
import Tabs from "./tabs"


export default async function Home(){
    const session = await getServerSession(options)



return(
    <>
    {session? (
        <div className="mt-20">
                <Tabs/>
        </div>
    ):(<div>
        <h1>Please go login to see this section</h1>
    </div>)}
    
    </>
)


}