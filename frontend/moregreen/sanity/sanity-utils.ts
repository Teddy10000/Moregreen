import {createClient,groq} from "next-sanity";

export async function getProjects(){

    const client = createClient({
        projectId: "yk2er0vp",
        dataset:"production",
       
        apiVersion:"2023-09-22",
        
    }); 

    return  client.fetch(

        groq`*[_type = "project"]{
            _id,
            _createdAt,
            date,
            teams {
                team1,
                team2
              },
            prediction,
            outcome,
            matchstart


        }`
    )
}