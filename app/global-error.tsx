'use client'
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string };  reset: () => void }) {
  return (
    <html>
      <body className="bg-red-200 text-white">
        <div className="bg-red-200 text-white h-screen">
           <div className="px-5 py-16 md:px-10 md:py-20">  
             <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                <h1 className="mb-4 text-4xl text-black font-bold md:text-6xl"> Global Error </h1>
                <p className="mx-auto mb-5 max-w-xl text-sm text-black font-bold sm:text-base md:mb-6 lg:mb-8"> Commodo, consequat turpis placerat ultrices sapien, tortor tincidunt. Sit quisque est metus auctor sed turpis lectus quis. </p>
                { error.message &&  <p className="mx-auto mb-5 max-w-xl text-sm text-black font-bold sm:text-base md:mb-6 lg:mb-8"> {error.message} </p> }
             <div className='flex flex-row gap-5 '>   
                <button onClick={reset}  className="inline-block items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white"> Reset </button>
               <Link href="/" className="inline-block items-center rounded-md bg-black px-8 py-4 text-center font-semibold text-white"> Back Home </Link>
             </div>
          </div>
        </div>
      </div>
     </body>
    </html>
  )
}
