import Image from 'next/image'
import Link from 'next/link'
import {
  GraduationCap,
  Building2,
  BookOpen,
  Award,
  Settings,
  ClipboardCheck,
  BookOpenCheck,
  CalendarDays,
  ClipboardList
} from 'lucide-react'
import ProgramsPage from '../programs/page'
import {
  gradingSystem,
  creditSystem,
  academicCalendar,
  supportServices
} from '@/public/data/academics'

export const metadata = {
  title: 'Academic Calendar  | USET',
  description:
    'Discover USET’s industry-focused academic programs and comprehensive curriculum designed for practical skill development.'
}

export default function AcademicsPage () {
  return (
    <div>
      <main className='bg-gray-50 text-gray-800'>
        {/* Hero Section */}
        <section className='bg-brandblue text-white py-28 px-6 text-center'>
          <div className='max-w-4xl mx-auto'>
            <h1 className='text-4xl font-bold mb-4'>Academic Calendar</h1>
            <p className='text-lg text-gray-100'>
              Discover our industry-focused programs and comprehensive
              curriculum designed for practical skill development.
            </p>
          </div>
        </section>

        {/* Academic Vision Section */}
        <section className='container mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-16'>
          <div className='flex-1'>
            <h2 className='text-2xl font-bold text-green-700 mb-4'>
              Our Academic Vision
            </h2>
            <p className='text-gray-700 mb-4 leading-relaxed'>
              USET is committed to providing industry-relevant education that
              prepares students for the demands of today’s workplace.
            </p>
            <p className='text-gray-700 mb-4 leading-relaxed'>
              Our academic programs are designed with direct input from industry
              leaders to ensure graduates possess both theoretical knowledge and
              practical skills needed for professional success.
            </p>
            <p className='text-gray-700 leading-relaxed'>
              We follow a dual technical education system modeled after
              successful European approaches, combining classroom learning with
              hands-on experience through laboratory work, projects, and
              internships.
            </p>
          </div>

          <div className='flex-1'>
            <div className='relative w-full h-72 md:h-92 rounded-xl overflow-hidden shadow-md'>
              <Image
                src='/images/10002.jpg'
                alt='USET Academic Vision'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </section>

        {/* Faculties Section */}
        <div className='bg-white'>
          <ProgramsPage />
        </div>
      </main>

      <main className='bg-gray-50 py-20 px-6 text-gray-800'>
        <div className='max-w-6xl mx-auto text-center mb-16'>
          <p className='inline-block bg-blue-100 text-gray-600 px-4 py-1 rounded-full text-sm font-medium mb-3'>
            Excellence in Education
          </p>
          <h1 className='text-4xl font-bold text-gray-600 mb-4'>
            Academic Systems & Standards
          </h1>
          <p className='text-gray-500 max-w-3xl mx-auto'>
            Our commitment to maintaining high academic standards and quality
            education for every student.
          </p>
        </div>

        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-2 max-w-6xl mx-auto'>
          {/* Grading System */}
          <div className='bg-white rounded-2xl shadow p-8 hover:shadow-md transition'>
            <div className='flex items-center gap-2 mb-4'>
              <ClipboardList className='text-brandblue' size={28} />
              <h2 className='text-xl font-bold text-brandblue'>
                Grading System
              </h2>
            </div>
            <table className='w-full border border-gray-200 text-sm rounded-lg overflow-hidden'>
              <thead className='bg-blue-50'>
                <tr>
                  <th className='p-3 text-left font-bold '>Grade</th>
                  <th className='p-3 text-left font-bold '>Points</th>
                  <th className='p-3 text-left font-bold '>Percentage</th>
                  <th className='p-3 text-left font-bold '>Status</th>
                </tr>
              </thead>
              <tbody>
                {gradingSystem.map(row => (
                  <tr key={row.grade} className='border-t'>
                    <td className='p-3 font-medium'>{row.grade}</td>
                    <td className='p-3'>{row.points}</td>
                    <td className='p-3'>{row.percentage}</td>
                    <td className='p-3 text-green-600 font-medium'>
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Credit System */}
          <div className='bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition'>
            <div className='flex items-center gap-2 mb-4'>
              <BookOpenCheck className='text-brandblue' size={28} />
              <h2 className='text-xl font-bold text-brandblue'>
                Credit System
              </h2>
            </div>
            <table className='w-full border border-gray-200 text-sm overflow-hidden rounded-lg'>
              <tbody>
                {creditSystem.map(item => (
                  <tr
                    key={item.type}
                    className='border-t hover:bg-blue-50 group transition-all duration-300 ease-out'
                  >
                    <td className='p-4 font-medium group-hover:translate-x-2 transition-all duration-300 ease-out'>
                      <strong>{item.type}:</strong> {item.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Academic Calendar */}
          <div className='bg-white rounded-2xl shadow p-8 hover:shadow-md transition'>
            <div className='flex items-center gap-2 mb-4'>
              <CalendarDays className=' text-brandblue' size={28} />
              <h2 className='text-xl font-bold text-brandblue'>
                Academic Calendar
              </h2>
            </div>
            <div className=' space-y-4'>
              {academicCalendar.map(event => (
                <div
                  key={event.title}
                  className='px-5 py-4 border-l-4 border-green-500 pl-4 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition'
                >
                  <p className='text-sm text-gray-500'>{event.date}</p>
                  <p className='font-medium text-gray-800'>{event.title}</p>
                  <span
                    className={`text-xs font-medium text-${event.color}-600`}
                  >
                    {event.category}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Services */}
          <div className='bg-white rounded-2xl shadow p-8 hover:shadow-md transition'>
            <div className='flex items-center gap-2 mb-4'>
              <GraduationCap className='text-brandblue' size={28} />
              <h2 className='text-xl font-bold text-brandblue'>
                Academic Support Services
              </h2>
            </div>
            <div className='space-y-5 text-sm text-gray-700'>
              {supportServices.map(s => (
                <div
                  key={s.title}
                  className='p-8 bg-gray-50 rounded-md shadow-sm hover:shadow-md transition'
                >
                  <h3 className='font-semibold text-gray-800'>{s.title}</h3>
                  <p className='mt-1'>{s.description}</p>
                  <a
                    href={s.link}
                    className='text-green-700 font-medium hover:underline mt-2 inline-block'
                  >
                    {s.linkText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
