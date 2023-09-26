'use client'
import { useSession } from "next-auth/react"
import Image from "next/image";
export default function Userinfo(){
    const {status , data:session} = useSession();

    if (status === "authenticated"){
        return(
            <>
            <Image
            src={session?.user?.image}
            alt="eewewew"
            width={60}
            height={60}

            />
            </>
        )
    }
    else {return (
        <> 
        </>
    ) }

}