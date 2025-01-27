import { Hero } from '@/components/Hero'
import React from 'react'

const page = () => {
  return (
    <main>
        <Hero 
        subtitle='SERVICES'
        backgroundImage='hero.png'
        title={["CREATIVE SOLUTIONS","TO IMPROVE","YOUR BUSINESS!"]}
        />
    </main>
  )
}

export default page