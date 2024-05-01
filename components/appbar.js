import React from 'react';
import Link from 'next/link'
import {SiGithub, SiLinkedin, SiInstagram} from 'react-icons/si';

const AppBar = () => {
    const social = [
        {
            link : "https://www.linkedin.com/in/somnath-umapathi-9a485a205/",
            icon : SiLinkedin,
        },
        {
            link : "https://github.com/Somnathumapathi",
            icon : SiGithub,
        },
        {
            link : "https://www.instagram.com/somnath_umapathi/",
            icon : SiInstagram,
        }
    ]
    return (
        <nav className='py-10 flex justify-between items-center'>            
            <h1 className='text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2'>Somnath U 👨🏾‍💻</h1>             
            <div className='flex items-center gap-5'>
                {social.map((s,i)=>{
                    const Icon = s.icon
                    return <Link href={s.link} key={i}>
                        <Icon className='w-5 h-5 hover:scale-125 transition-all hover:text-orange-500'/>
                    </Link>
                })}
            </div>
        </nav>
    )
}

export default AppBar