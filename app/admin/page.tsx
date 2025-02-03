'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [error, setError] = useState(false)

  if (error) throw new Error("An error occurred; something was wrong.")


    return( <div className="bg-red-200 text-white h-screen">
      <div className="px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <h1 className="mb-4 text-4xl text-black font-bold md:text-6xl"> Admin Page </h1>
            <button onClick={() => setError(true)} className="text-white bg-black rounded-lg  px-4 py-2 text-center inline-flex items-center"> Trigger Error </button>
        </div>
      </div>
     </div>)
}
