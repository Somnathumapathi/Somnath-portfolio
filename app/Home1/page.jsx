'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Smartphone, Globe, Code, Briefcase, Mail, User, Cpu, Download, Home, ArrowLeft, Moon, Sun, Wifi, Battery, Settings, Music } from 'lucide-react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Html } from '@react-three/drei'
import * as THREE from 'three'
import { LampContainer } from "../../components/ui/lamp";
import Skills from '@/components/skills'
import {SiFlutter, SiNextdotjs, SiFirebase, SiMongodb, SiExpress, SiJavascript, SiPython, SiSolidity, SiReact, SiFlask, SiEthereum} from 'react-icons/si';
import {FaJava} from 'react-icons/fa'

const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded-md transition-colors ${className}`}
    {...props}
  >
    {children}
  </button>
)

const Input = ({ className, ...props }) => (
  <input
    className={`w-full p-2 rounded-md ${className}`}
    {...props}
  />
)

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`w-full p-2 rounded-md ${className}`}
    {...props}
  />
)

const AppIcon = ({ icon: Icon, title, onClick, isDarkMode }) => (
  <div className="flex flex-col items-center" onClick={onClick}>
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
      <Icon size={32} className={isDarkMode ? 'text-white' : 'text-gray-900'} />
    </div>
    <span className={`mt-2 text-sm ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{title}</span>
  </div>
)

const Phone = ({ children, isDarkMode }) => {
  const phoneRef = useRef()
  const { viewport } = useThree()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    phoneRef.current.rotation.x = Math.sin(time / 4) / 16
    phoneRef.current.rotation.y = Math.sin(time / 2) / 8
  })

  return (
    <group ref={phoneRef} scale={[1.2, 1.2, 1.2]}>
      {/* Phone body */}
      <mesh>
        <boxGeometry args={[2.4, 5, 0.2]} />
        <meshStandardMaterial color={isDarkMode ? '#333' : '#fff'} />
      </mesh>

      {/* Screen */}
      <mesh position={[0, 0, 0.101]}>
        <planeGeometry args={[2.2, 4.8]} />
        <meshBasicMaterial color={isDarkMode ? '#000' : '#fff'} />
      </mesh>

      {/* Home button */}
      <mesh position={[0, -2.3, 0.101]}>
        <circleGeometry args={[0.2, 32]} />
        <meshStandardMaterial color={isDarkMode ? '#222' : '#e0e0e0'} />
      </mesh>

      {/* Camera */}
      <mesh position={[0, 2.3, 0.101]}>
        <circleGeometry args={[0.1, 32]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Speaker */}
      <mesh position={[0, 2.1, 0.101]}>
        <boxGeometry args={[0.4, 0.05, 0.01]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Screen content */}
      <Html transform occlude position={[0, 0, 0.11]} scale={[0.22, 0.22, 0.22]}>
        <div className="w-[390px] h-[844px] overflow-hidden">
          {children}
        </div>
      </Html>
    </group>
  )
}

const PhoneScreen = ({ activeScreen, setActiveScreen, isDarkMode, setIsDarkMode }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [currentTime, setCurrentTime] = useState(new Date())
  const [batteryLevel, setBatteryLevel] = useState(100)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState({ title: 'Song Title', artist: 'Artist Name' })

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setBatteryLevel(prev => Math.max(prev - 1, 0))
    }, 60000) // Decrease battery every minute
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', { name, email, message })
    alert('Message sent!')
    setName('')
    setEmail('')
    setMessage('')
  }

  const bgColor = isDarkMode ? 'bg-gray-900' : 'bg-gray-100'
  const textColor = isDarkMode ? 'text-white' : 'text-gray-900'

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return (
          <div className="relative h-full">
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(/images/myprofile.jpg)` }}></div>
            <div className={`absolute inset-0 ${isDarkMode ? 'bg-black' : 'bg-white'} opacity-50`}></div>
            <div className="relative z-10 grid grid-cols-3 gap-4 p-4">
              <AppIcon icon={User} title="About" onClick={() => setActiveScreen('about')} isDarkMode={isDarkMode} />
              <AppIcon icon={Cpu} title="Skills" onClick={() => setActiveScreen('skills')} isDarkMode={isDarkMode} />
              <AppIcon icon={Code} title="Projects" onClick={() => setActiveScreen('projects')} isDarkMode={isDarkMode} />
              <AppIcon icon={Briefcase} title="Experience" onClick={() => setActiveScreen('experience')} isDarkMode={isDarkMode} />
              <AppIcon icon={Mail} title="Contact" onClick={() => setActiveScreen('contact')} isDarkMode={isDarkMode} />
              <AppIcon icon={Download} title="Download CV" onClick={() => setActiveScreen('download')} isDarkMode={isDarkMode} />
              <AppIcon icon={Settings} title="Settings" onClick={() => setActiveScreen('settings')} isDarkMode={isDarkMode} />
              <AppIcon icon={Music} title="Spotify" onClick={() => setActiveScreen('spotify')} isDarkMode={isDarkMode} />
            </div>
          </div>
        )
      case 'about':
        return (
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>About Me</h2>
            <p className={textColor}>I'm a passionate full stack developer with expertise in web, mobile, and blockchain technologies. With a keen eye for detail and a love for clean, efficient code, I strive to create innovative solutions that make a difference.</p>
          </div>
        )
      case 'skills':
        return (
          <div>
            {/* <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Skills</h2> */}
            <Skills></Skills>
            {/* <motion.ul className="space-y-2">
              {[
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
              {
                  name : 'React',
                  Icon : SiReact
              },
              {
                  name : 'Flask',
                  Icon : SiFlask
              },
              {
                  name : 'Ethereum',
                  Icon : SiEthereum
              }
              ].map((skill, index) => (
                <motion.li
                  key={index}
                  className={`flex items-center ${textColor}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <skill.Icon className="mr-2" /> {skill.name}
                
                </motion.li>
              ))}
            </motion.ul> */}
          </div>
        )
      case 'projects':
        return (
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Projects</h2>
            <motion.ul className="space-y-4">
              {[
                { title: 'DeFi Platform', description: 'A decentralized finance platform built with Solidity and React.' },
                { title: 'E-commerce Mobile App', description: 'A full-featured e-commerce app developed with React Native and Node.js.' },
                { title: 'Portfolio Website', description: 'A responsive portfolio website built with Next.js and Three.js.' }
              ].map((project, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className={`text-xl font-semibold ${textColor}`}>{project.title}</h3>
                  <p className={textColor}>{project.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )
      case 'experience':
        return (
          <div>
            <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Experience</h2>
            <motion.ul className="space-y-4">
              {[
                { title: 'Senior Full Stack Developer', company: 'TechCorp Inc.', period: '2020 - Present', description: 'Led development of multiple web and mobile applications using React, Node.js, and React Native.' },
                { title: 'Blockchain Developer', company: 'CryptoInnovate', period: '2018 - 2020', description: 'Developed smart contracts and decentralized applications using Solidity and Web3.js.' },
                { title: 'Web Developer', company: 'WebSolutions Co.', period: '2016 - 2018', description: 'Created responsive websites and web applications using JavaScript and PHP.' }
              ].map((job, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <h3 className={`text-xl font-semibold ${textColor}`}>{job.title}</h3>
                  <p className={textColor}>{job.company} | {job.period}</p>
                  <p className={textColor}>{job.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        )
      case 'contact':
        return (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Contact Me</h2>
            <Input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
            />
            <Textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className={isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}
            />
            <Button type="submit" className={`w-full ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}>Send Message</Button>
          </form>
        )
      case 'download':
        return (
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Download CV</h2>
            <Button className={`w-full ${isDarkMode ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white hover:bg-green-600'}`}>
              <Download className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </div>
        )
      case 'settings':
        return (
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Settings</h2>
            <div className="flex justify-between items-center">
              <span className={textColor}>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
              </span>
              <Button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-300 text-gray-900'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>
        )
      case 'spotify':
        return (
          <div className="space-y-4">
            <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>Spotify</h2>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className={`font-semibold ${textColor}`}>{currentSong.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{currentSong.artist}</p>
                </div>
                <Button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className={isDarkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-500 hover:bg-green-600'}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </Button>
              </div>
              <div className={`h-1 w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}>
                <div className={`h-full w-1/3 ${isDarkMode ? 'bg-green-600' : 'bg-green-500'}`}></div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={`phone-screen ${bgColor} ${textColor} h-full w-full overflow-hidden relative`}>
      {/* Status Bar */}
      <div className={`absolute top-0 left-0 right-0 flex justify-between items-center px-4 py-1 ${isDarkMode ? 'bg-black' : 'bg-gray-200'} z-10`}>
        <span className={isDarkMode ? '!text-white' : '!text-black'}>
          {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
        <div className="flex items-center space-x-2">
          <Wifi size={14} />
          <Battery size={14} />
          <span>{batteryLevel}%</span>
        </div>
      </div>

      {activeScreen !== 'home' && (
        <Button
          className={`absolute top-[40px] left-2 z-30 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}
          onClick={() => setActiveScreen('home')}
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
      )}

      <div className="mt-[40px] h-[calc(100%-40px)] overflow-y-auto p-4">
        {renderScreen()}
      </div>
    </div>
  )
}

export default function Component() {
  const [activeScreen, setActiveScreen] = useState("home")
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setIsDarkMode(prefersDark)
  }, [])

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} text-white font-mono`}>
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
        {/* <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Somanth Umapathi <br /> Full Stack Developer | Web | Mobile
      </motion.h1>
    </LampContainer> */}
          <h1 className={`text-4xl font-bold mb-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            Somnath Umapathi
          </h1>
          <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Full Stack Developer | Web | Mobile</p>
        </header>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full h-[800px]">
            <Canvas>
              <PerspectiveCamera makeDefault position={[0, 0, 8]} />
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <Phone isDarkMode={isDarkMode}>
                <PhoneScreen
                  activeScreen={activeScreen}
                  setActiveScreen={setActiveScreen}
                  isDarkMode={isDarkMode}
                  setIsDarkMode={setIsDarkMode}
                />
              </Phone>
            </Canvas>
          </div>
          <div className={`max-w-md space-y-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            <h2 className="text-2xl font-bold mb-4">Hi, Good to see you!</h2>
            <p>
              Want to know more about me?
              Feel free to navigate through different sections to learn more about me and my work.
            </p>
            <p>
              You can interact with the 3D phone by clicking and dragging to rotate it.
              The phone's content is fully functional and updates in real-time as you navigate through different screens.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['about', 'skills', 'projects', 'experience', 'contact', 'download'].map((item) => (
                <Button key={item} onClick={() => setActiveScreen(item)} className={`w-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <footer className={`mt-12 py-6 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
          <a href="#" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
          <a href="#" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
        </div>
        <p>&copy; 2024 DevPortfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}