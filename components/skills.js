import React from 'react'
import {SiFlutter, SiNextdotjs, SiFirebase, SiMongodb, SiExpress, SiJavascript, SiPython, SiSolidity} from 'react-icons/si';
import {FaJava} from 'react-icons/fa'

function Skills() {
    const skills = [
        {
            name : 'Flutter',
            Icon : SiFlutter
        },
        {
            name : 'NextJS',
            Icon : SiNextdotjs
        },
        {
            name : 'ExpressJS',
            Icon : SiExpress
        },
        {
            name : 'FireBase',
            Icon : SiFirebase
        },
        {
            name : 'MongoDb',
            Icon : SiMongodb
        },
       
        {
            name : 'Javascript',
            Icon : SiJavascript
        },
        {
            name : 'Java',
            Icon : FaJava},
            {
            name : 'Python',
                Icon : SiPython
            },
        {
            name : 'Solidity',
            Icon : SiSolidity
        },
    ]
  return (    
    <div><div>
        <div  className='flex flex-col items-center justify-center -rotate-2 pb-10'><h1 className='text-1xl font-semibold hover:text-green-500'>Skills 💻</h1>
                    <div className='pr-2 w-20 h-1 bg-green-500 rounded-full'></div><div className='pl-2 w-20 h-1 bg-blue-500 translate-x-2 rounded-full'></div></div></div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
                        <skill.Icon className="w-12 h-12 text-blue-500 mb-2" />
                        <p className="text-lg font-semibold text-center">{skill.name}</p>
                    </div>
                ))}
            </div></div>
  )
}

export default Skills