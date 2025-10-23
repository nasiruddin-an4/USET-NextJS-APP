import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'

function Footer () {
  const footerData = {
    about: {
      logo: '/images/logo.png',
      title: 'University of Skill Enrichment and Technology (USET)',
      description:
        "Bangladesh's first skill-based university, committed to providing industry-relevant education to prepare students for the demands of today’s workplace.",
      socials: [
        { name: 'facebook', url: '#' },
        { name: 'twitter', url: '#' },
        { name: 'linkedin', url: '#' },
        { name: 'instagram', url: '#' }
      ]
    },
    quickLinks: [
      { label: 'About Us', url: '/about' },
      { label: 'Programs', url: '/programs' },
      { label: 'Admission', url: '/admission' },
      { label: 'Faculty', url: '/faculty' },
      { label: 'Student Life', url: '/student-life' },
      { label: 'News & Events', url: '/news' }
    ],
    importantLinks: [
      { label: 'Mission & Vision', url: '/mission-vision' },
      { label: 'Academic Calendar', url: '/academic-calendar' },
      { label: 'Campus Facilities', url: '/campus' },
      { label: 'Scholarships', url: '/scholarships' },
      { label: 'Tuition & Fees', url: '/tuition' },
      { label: 'Student Portal', url: '/portal' }
    ],
    contact: {
      address:
        '672, Kazibari Bus Stand, Bhuiagar, (Near Signboard) Narayanganj, Bangladesh',
      phone: '+8801733-360664',
      email: 'info@uset.ac'
    },
    bottomLinks: [
      { label: 'Privacy Policy', url: '/privacy' },
      { label: 'Terms of Use', url: '/terms' },
      { label: 'Sitemap', url: '/sitemap' }
    ]
  }

  const { about, quickLinks, importantLinks, contact, bottomLinks } = footerData

  const renderIcon = name => {
    switch (name) {
      case 'facebook':
        return <Facebook size={18} />
      case 'twitter':
        return <Twitter size={18} />
      case 'linkedin':
        return <Linkedin size={18} />
      case 'instagram':
        return <Instagram size={18} />
      default:
        return null
    }
  }

  return (
    <footer className='bg-gray-900 text-gray-300 pt-16 pb-6 border-t-4 border-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* === Top Section === */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-20'>
          {/* About */}
          <div className='lg:col-span-4 flex flex-col items-start'>
            <Image
              src={about.logo}
              alt='USET Logo'
              width={140}
              height={140}
              className='mb-4'
            />

            <h3 className='text-lg font-semibold text-white'>{about.title}</h3>
            <p className='text-sm mt-3 leading-relaxed text-gray-400'>
              {about.description}
            </p>

            {/* Social Icons */}
            <div className='flex gap-3 mt-5'>
              {about.socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className='p-2 bg-gray-800 hover:bg-blue-600 rounded-full transition'
                >
                  {renderIcon(social.name)}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className='lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {/* Quick Links */}
            <div>
              <h4 className='text-white font-semibold text-lg mb-4 border-b-2 border-blue-600 inline-block pb-1'>
                Quick Links
              </h4>
              <ul className='space-y-2 text-sm'>
                {quickLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className='hover:text-white hover:underline hover:ml-2 transition-all duration-300'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important Links */}
            <div>
              <h4 className='text-white font-semibold text-lg mb-4 border-b-2 border-blue-600 inline-block pb-1'>
                Important Links
              </h4>
              <ul className='space-y-2 text-sm'>
                {importantLinks.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.url}
                      className='hover:text-white hover:underline hover:ml-2 transition-all duration-300'
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className='text-white font-semibold text-lg mb-4 border-b-2 border-blue-600 inline-block pb-1'>
                Contact Us
              </h4>
              <ul className='space-y-3 text-sm'>
                <li className='flex items-start gap-2'>
                  <MapPin
                    size={18}
                    className='text-green-500 mt-1 flex-shrink-0'
                  />
                  <span>{contact.address}</span>
                </li>
                <li className='flex items-center gap-2'>
                  <Phone size={18} className='text-green-500' />
                  <span>{contact.phone}</span>
                </li>
                <li className='flex items-center gap-2'>
                  <Mail size={18} className='text-green-500' />
                  <span>{contact.email}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* === Bottom Bar === */}
        <div className='flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500 space-y-3 md:space-y-0'>
          <p className='text-xs sm:text-sm'>
            © 2025 University of Skill Enrichment & Technology. All Rights
            Reserved.
          </p>
          <div className='flex flex-wrap justify-center gap-4 text-xs sm:text-sm'>
            {bottomLinks.map((link, i) => (
              <Link key={i} href={link.url} className='hover:text-white'>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
