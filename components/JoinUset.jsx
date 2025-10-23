import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

function JoinUset () {
  return (
    <section className='relative bg-gradient-to-br from-brandblue via-blue-800 to-indigo-900 text-white py-20 px-6 overflow-hidden'>
      {/* Background decorative overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-cover bg-center"></div>

      <div className='relative max-w-5xl mx-auto text-center'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4'>
          Join the University of Skill Enrichment & Technology (USET)
        </h2>
        <p className='text-white/90 max-w-2xl mx-auto mb-8'>
          Be part of Bangladesh’s first skill-based university — where
          innovation, practical learning, and research meet to create the
          leaders of tomorrow.
        </p>

        <div className='flex justify-center gap-4 flex-wrap'>
          <Link
            href='/admission'
            className='bg-white text-blue-700 font-semibold px-8 py-3 rounded-lg hover:bg-blue-100 transition flex items-center gap-2'
          >
            Apply Now <ArrowRight size={18} />
          </Link>

          <Link
            href='/programs'
            className='border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition'
          >
            Explore Programs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default JoinUset
