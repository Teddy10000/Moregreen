<<<<<<< HEAD
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

=======
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

>>>>>>> 205af39edd9b980b34dc296111e7cfc7eb057a24
}