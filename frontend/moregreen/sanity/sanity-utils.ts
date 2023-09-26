<<<<<<< HEAD
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
                team2,
                league
              },
            prediction,
            outcome,
            matchstart,
            Freebet,


        }`
    )
=======
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
>>>>>>> 205af39edd9b980b34dc296111e7cfc7eb057a24
}