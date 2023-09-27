
import {createClient,groq} from "next-sanity";

export async function getProjects(){

    const client = createClient({
        projectId: "yk2er0vp",
        dataset:"production",
       
        apiVersion:"2023-09-22",
        
    }); 

    return  client.fetch(

        groq`*[_type == "project"]{
            _id,
            _createdAt,
            datetime,
            teams,
            prediction,
            outcome,
            matchstart,
            Freebet


        }`
    )

}