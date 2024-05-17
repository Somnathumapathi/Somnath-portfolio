import React from 'react'

function Projects() {

const projects = [
    {
        title: "Crave Hub",
        link: "https://github.com/Somnathumapathi/CraveHub",
        description: "Health conscious food ordering website.",
        techstack: ["NextJS", "Firebase"]
    },
    {
        title: "ExpressMart",
        description: "E-commerce app",
        link: "https://github.com/Somnathumapathi/ExpressMart",
        techstack: ["Flutter", "ExpressJs", "MongoDb"]
    },
    {
        title: "Status 200",
        description: "Project related question answer platform",
        link: "https://github.com/Somnathumapathi/Status200",
        techstack: ["Flutter", "Firebase"]
    },
    {
        title: "Worcse",
        description: "Website for demand creator and supply provider contracts",
        link: "https://github.com/KoushikMCN/Worcse",
        techstack: ["NextJS", "Firebase", "Solidity"]
    },
    {
        title: "chEthFunds",
        description: "Chitfunds using blockchain",
        link: "https://github.com/synapsecode/chETHFunds",
        techstack: ["NextJS", "Firebase", "Solidity"]
    },
    {
        title: "TrashTrace",
        description: "Complete Waste managemant solution.",
        link: "https://github.com/synapsecode/TrashTrace-MiniProject",
        techstack: ["Flutter", "Flask"]
    },
    {
        title: "Py-notes-formatter",
        description: "Flask website that formats notes according to the orientation and converts it to pdf",
        link: "https://github.com/Somnathumapathi/Py-notes-formatter",
        techstack: ["Python", "Flask"]
    },
    {
        title: "RedFrontier",
        description: "Mars colonization helpmate",
        link: "https://github.com/synapsecode/RedFrontier",
        techstack: ["Flutter", "Firebase"]
    },
]

  return (
    <div className="max-w-screen-lg mx-auto">
             <div  className='flex flex-col items-center justify-center -rotate-2 pb-10'><h1 className='text-2xl font-semibold hover:text-green-500'>Projects 🚀</h1>
                    <div className='pr-2 w-40 h-1 bg-green-500 rounded-full'></div><div className='pl-2 w-40 h-1 bg-blue-500 translate-x-2 rounded-full'></div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="shadow-md border border-gray-200 rounded-lg overflow-hidden hover:bg-blue-950">
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                            <p className="text-gray-500 mb-4">{project.description}</p>
                            <div className="flex flex-wrap">
                                {project.techstack.map((tech, index) => (
                                    <span key={index} className="bg-grey-500 rounded-full px-2 py-1 text-sm font-semibold text-green-500 mr-2 mb-2">{tech}</span>
                                ))}
                            </div>
                        </div>
                        <div className="p-4 bg-gray-800">
                            <a href={project.link} className="text-blue-500 hover:underline">View on GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default Projects