import React from 'react'

function Experience() {
    const experience = [
        {
            company: "Zylu",
            team : ["Product engineering team"],
        },
        {
            company: "Win Research",
            team: ["Full Stack Developer"]
        }
    ]
  return (
    <div className="max-w-screen-lg mx-auto">
            <div className="flex flex-col items-center justify-center -rotate-2 pb-10">
                <h1 className="text-2xl font-semibold hover:text-green-500">Experience 💼</h1>
                <div className="pr-2 w-40 h-1 bg-green-500 rounded-full"></div>
                <div className="pl-2 w-40 h-1 bg-blue-500 translate-x-2 rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experience.map((exp, index) => (
                    <div key={index} className="shadow-md border rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{exp.company}</h2>
                            <p className="text-blue-700 mb-4">Team: {exp.team.join(", ")}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Experience
