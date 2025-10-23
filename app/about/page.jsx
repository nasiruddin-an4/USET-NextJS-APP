import React from 'react'
import { MapPin, Building, Target, Eye, History } from 'lucide-react'
import Image from 'next/image'
import aboutData from '@/public/data/about'
import Link from 'next/link'

export const metadata = {
  title: 'About Us | USET',
  description:
    'Learn more about the University of Science, Education & Technology — our mission, vision, history, facilities, leadership, and location.'
}

function AboutPage () {
  const { header, mission, vision, history, facilities, leadership, location } =
    aboutData

  return (
    <div className='bg-gray-50 text-gray-800'>
      {/* Header */}
      <section className='bg-brandblue text-white py-28 text-center'>
        <h1 className='text-3xl md:text-5xl font-bold mb-4'>{header.title}</h1>
        <p className='max-w-2xl mx-auto text-gray-200'>{header.subtitle}</p>
      </section>

      {/* Mission & Vision */}
      <section className='container mx-auto py-16 px-6 grid md:grid-cols-3 gap-10'>
        {[
          { ...mission, icon: <Target className='text-blue-600' size={28} /> },
          { ...vision, icon: <Eye className='text-blue-600' size={28} /> },
          { ...history, icon: <History className='text-blue-600' size={28} /> }
        ].map((item, i) => (
          <div
            key={i}
            className='bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition'
          >
            <div className='flex items-center gap-3 mb-4'>
              {item.icon}
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
            </div>
            <p className='text-gray-600 leading-relaxed'>{item.description}</p>
          </div>
        ))}
      </section>

      {/* Facilities */}
      <section className='bg-gray-100 py-16 px-4 md:px-0'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-3xl font-bold text-center text-gray-600 mb-12'>
            Facilities & Infrastructure
          </h2>
          <div className='grid md:grid-cols-3 gap-8'>
            {facilities.map((item, index) => (
              <div
                key={index}
                className='bg-white rounded-2xl p-8 hover:shadow-lg transition text-center'
              >
                <div className='bg-gray-100 p-5 rounded-full inline-block mb-4'>
                  <Building className='mx-auto text-blue-600' size={32} />
                </div>
                <h3 className='font-bold text-lg mb-2'>{item.title}</h3>
                <p className='text-gray-600 text-sm'>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className='bg-white py-20 px-6'>
        <div className='max-w-6xl mx-auto text-center'>
          <h2 className='text-4xl font-bold mb-4 text-gray-600'>
            Our Leadership
          </h2>
          <p className='max-w-3xl mx-auto text-gray-500 mb-12'>
            USET is guided by visionary leaders, experienced educators, and
            dedicated administrators who believe in transforming education into
            a skill-oriented journey.
          </p>

          <div className='flex flex-col sm:flex-row justify-center items-center gap-10'>
            {leadership.map((leader, i) => (
              <Link
                key={i}
                href={leader.link || '#'}
                className='group w-full sm:w-1/2 max-w-sm flex flex-col text-left rounded-xl transition-all duration-300 transform hover:-translate-y-1 p-6'
              >
                <div className='relative md:w-[295px] md:h-[371px] object-cover rounded-md mb-5'>
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    fill
                    className='object-cover rounded-md'
                  />
                </div>
                <h3 className='text-2xl font-semibold text-left text-gray-800 group-hover:text-brandblue'>
                  {leader.name}
                </h3>
                <p className=' text-left text-sm mt-1 mb-3'>{leader.role}</p>
                <p className='text-gray-500 text-sm leading-relaxed line-clamp-3'>
                  {leader.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className='bg-gray-50 py-20 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl sm:text-4xl font-bold text-gray-600 mb-4'>
              Our Location
            </h2>
            <p className='text-gray-500 max-w-3xl mx-auto'>
              Visit our campus conveniently located near major routes —
              providing a safe, modern, and vibrant learning environment for
              all.
            </p>
          </div>

          <div className='flex flex-col lg:flex-row items-center gap-12'>
            {/* Map Section */}
            <div className='flex-1 w-full'>
              <iframe
                src={location.mapUrl}
                width='100%'
                height='380'
                allowFullScreen=''
                loading='lazy'
                className='rounded-2xl shadow-md border-0 w-full'
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
