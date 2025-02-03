'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

//  It is a trigger error and is caught by a global error file. 
const globalError = async () =>
   new Promise((_, rej) => {
   setTimeout(() => rej("Server-Side Error: An error has occurred; something went wrong."), 500);
});

export function Buttons(){

   const [error, setError] = useState(false)

    useEffect(()=>{   
       if(error){
         globalError()
       }
    },[error])

    return (
         <div className="container  flex flex-row gap-5 my-10 justify-between items-center">

          <Link href={"/"} className="text-white bg-black rounded-lg  px-4 py-2 text-center inline-flex items-center"> 
            Home
           </Link>

           <Link href={"/admin"} className="text-white bg-black rounded-lg  px-4 py-2 text-center inline-flex items-center"> 
            Error 
           </Link>

           <button onClick={() => setError(true)} className="text-white bg-black rounded-lg  px-4 py-2 text-center inline-flex items-center">  Global Error </button>

          <Link href={"/admin/dashboard"} className="text-white bg-black rounded-lg px-4 py-2 text-center inline-flex items-center"> 
             Forbidden
          </Link>

          <Link href={"/admin/login"} className="text-white bg-black rounded-lg px-4 py-2 text-center inline-flex items-center">
            Unauthorized
          </Link>

          <Link href={"/ref"} className="text-white bg-black rounded-lg px-4 py-2 text-center inline-flex items-center"> 
             404 Error
          </Link>
        </div>
    )
}
