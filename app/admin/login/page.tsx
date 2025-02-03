
import { unauthorized } from 'next/navigation'

export default async function Login() {

   const session = true 

   // If the user is not authenticated, return a 401
   if (session) {
       unauthorized()
    }

  return(<div className="bg-red-200 text-white h-screen">
      <div className="px-5 py-16 md:px-10 md:py-20">  
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
           <h1 className="mb-4 text-4xl text-black font-bold md:text-6xl"> Dashboard Login Page </h1>
        </div>
      </div>
     </div>)
}
