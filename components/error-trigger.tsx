'use client'

import { useState } from 'react'

export function ErrorTrigger() {

  const [error, setError] = useState(false)

  if (error) throw new Error("An error occurred; something was wrong.")

  return (
    <button onClick={() => setError(true)} className="text-white bg-black rounded-lg  px-4 py-2 text-center inline-flex items-center"> Trigger Error </button>
  )
}
