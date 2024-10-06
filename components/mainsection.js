import React from 'react'
import Link from 'next/link'

function MainSection() {
  return (
    <div className='min-h-[60vh] flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between'>
      <div className='space-y-10 text-center lg:text-left'>
            <h1 className='text-4xl lg:text-6xl font-bold'>Hey good to see you!👋,<br/><span className='underline underline-offset-8 decoration-green-500'>{"I'm Somnath"}</span></h1>
            <p className='md:w-96 text-lg text-blue-300'>{
                "Student, Flutter developer, and an explorer 🏝️"}</p>
        <Link href={"mailto:somnathumapathi7@gmail.com"} className='inline-block'>
                    <div><h1 className='text-2xl font-semibold hover:text-green-500'>Contact me 📬</h1>
                    <div className='pr-2 w-40 h-1 bg-green-500 rounded-full'></div><div className='pl-2 w-40 h-1 bg-blue-500 translate-x-2 rounded-full'></div></div>
        </Link>
      </div>
      <div className='relative'>
            <div className='w-52 h-52'>
                <img className='h-full w-full rounded-full' src='images/portphoto.jpeg'></img>
        </div>
            <div className='bg-glow h-full w-full absolute top-[40%] right-1/2'></div>
      </div>
    </div>
  )
}

export default MainSection
