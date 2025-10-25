'use client';

import { useRouter } from 'next/navigation';
import Image from "next/image";
import { motion } from 'framer-motion';

export default function DetailsClient({ data, type }) {
  const router = useRouter();

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative h-[50vh] w-full">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="absolute top-8 left-8 z-10 flex items-center space-x-2 text-white hover:text-gray-200 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span>Back</span>
        </button>
        
        {/* Category Badge */}
        <div className="absolute top-8 right-8 z-10">
          <span className={`px-4 py-2 rounded-full text-sm font-medium ${
            type === 'events'
              ? 'bg-purple-100 text-purple-700'
              : 'bg-indigo-100 text-indigo-700'
          }`}>
            {data.category || 'Event'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Title and Date */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{data.title}</h1>
          <div className="flex items-center text-gray-600 mb-8">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            {type === 'events' ? (
              <span>
                {formatDate(data.startDate)}
                {data.endDate && data.endDate !== data.startDate && (
                  <> - {formatDate(data.endDate)}</>
                )}
              </span>
            ) : (
              <span>{formatDate(data.date)}</span>
            )}
          </div>

          {/* Event Location */}
          {type === 'events' && data.location && (
            <div className="flex items-center text-gray-600 mb-8">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>{data.location}</span>
            </div>
          )}

          {/* Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8 leading-relaxed">
              {data.description}
            </p>

            {/* Full Content */}
            {data.content && (
              <div className="text-gray-700 leading-relaxed">
                {data.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Event Registration Button */}
          {type === 'events' && data.registrationLink && (
            <div className="mt-12">
              <a
                href={data.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-medium"
              >
                Register for Event
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}