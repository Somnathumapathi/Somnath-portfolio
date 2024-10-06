'use client'
import { PhoneModel } from '@/components/phone'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'


function page() {
  return (
    <div className='bg-white w-[100vw] h-[100vw]'><Canvas>
        <Environment preset='city'/>
        <OrbitControls/><PhoneModel/></Canvas></div>
  )
}

export default page