import Link from 'next/link'

export function Buttons(){
    return (
         <div className="container flex flex-row gap-5 mb-10 justify-between items-center">

          <Link href={"/admin"} className="text-white bg-black rounded-lg  px-4 py-2 text-center inline-flex items-center"> 
            Error 
           </Link>

          <Link href={"/blog"} className="text-white bg-black rounded-lg  px-4 py-2 text-center inline-flex items-center"> 
            Global Error
         </Link>

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
