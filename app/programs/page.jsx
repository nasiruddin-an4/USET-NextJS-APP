'use client'
import React from 'react'
import Link from 'next/link'
import faculties from '@/public/data/programs'

function ProgramsPage () {
  // Flatten all programs with faculty info
  const allPrograms = faculties.flatMap(faculty =>
    faculty.programs.map(program => ({
      ...program,
      facultyName: faculty.name
    }))
  )

  return (
    <div className='max-w-7xl mx-auto px-6 py-20 text-center'>
      <div className='max-w-3xl mx-auto mb-12'>
        <h2 className='text-4xl md:text-5xl font-medium text-gray-600'>
          Our Academic Programs
        </h2>
        <p className='text-gray-500 mt-2 text-md'>
          Discover our industry-relevant academic programs designed to prepare
          you for professional success in the modern workplace.
        </p>
      </div>

      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {allPrograms.map(program => (
          <Link
            key={program.id}
            href={`/programs/${program.id}`}
            className='group bg-white shadow-sm hover:shadow-xl rounded-md transition-all duration-300 overflow-hidden flex flex-col justify-between'
          >
            <div className='bg-brandblue py-16 p-6'>
              <h3 className='text-xl font-bold text-white'>{program.name}</h3>
            </div>
            <div className='p-8 text-left'>
              <p className='text-gray-500 text-sm mb-5 line-clamp-4'>
                {program.description}
              </p>
              <div className='flex items-center justify-between text-sm text-gray-700'>
                <p>
                  <span className='font-semibold'>Duration:</span>{' '}
                  {program.duration}
                </p>

                <p>
                  <span className='font-semibold'>Credits:</span>{' '}
                  {program.credits}
                </p>
              </div>
              <div className='mt-6'>
                <span className='block w-full text-center border border-brandblue text-brandblue px-6 py-2 rounded-md text-sm font-medium group-hover:bg-brandblue duration-500 ease-out transition-all group-hover:text-white'>
                  View Details →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProgramsPage
