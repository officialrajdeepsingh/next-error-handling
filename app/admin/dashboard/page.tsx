import { forbidden } from 'next/navigation'
 
export default async function AdminDashboard() {

   // Check if the user has the 'admin' role
  const admin = true

  if(admin === true){
    forbidden()
  }

  return(<div className="bg-red-200 text-white h-screen">
      <div className="px-5 py-16 md:px-10 md:py-20">  
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
           <h1 className="mb-4 text-4xl text-black font-bold md:text-6xl"> Dashboard Page </h1>
        </div>
      </div>
     </div>)
}
