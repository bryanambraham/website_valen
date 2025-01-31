import React from 'react'

interface addon_content {
    title?: string
    subtitle?: string
    description?: string
  }

export function Addon({title,subtitle,description}:addon_content){
    return(
        <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 py-8 text-[#6B4536] uppercase">{title}</h2>
        <div className='w-full bg-[#FBD28C] justify-center'>
            <div className='text-center max-w-3xl mx-auto py-4'>
                <h2 className="text-xl lg:text-2xl">{subtitle}</h2>
                <p className="text-base lg:text-md">{description}</p>
            </div>
        </div>

      </div>
    )
}