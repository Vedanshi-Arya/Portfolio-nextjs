
import { Approach } from '@/components/Approach'
import Client from '@/components/Client'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import { FloatingNav } from '@/components/ui/FloatingNavbar'
import { navItems } from '@/data'
import React from 'react'

const page = () => {
  return (
      
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero/>
        <Grid/>
        <Projects/>
        <Client/>
        <Experience/>
        <Approach/>
        <Footer/>

      </div>
    </main>
  )
}

export default page