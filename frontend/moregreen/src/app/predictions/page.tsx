
import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth" 
import Tabs from "./tabs"
import Footer from "../footer"


export default async function Home(){
    const session = await getServerSession(options)



return(
    <>
    {session? (<>
        <div className="mx-auto container mt-32">
                <Tabs/>
                
        </div>
        <Footer/>
        </>
    ):(<div>
        <h1>Please go login to see this section</h1>
    </div>)}
    
    </>
)


}