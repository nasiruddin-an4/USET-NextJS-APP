"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronLeft,
  Tag,
  Share2,
  Users,
  Trophy,
  ExternalLink,
  Quote,
  CalendarDays,
  Timer,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Info,
  AlertCircle,
  Clock3,
  Building,
  GraduationCap,
  Award,
} from "lucide-react";

export default function DetailsClient({ data, type }) {
  const router = useRouter();
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [timeToRead, setTimeToRead] = useState("5 min");

  useEffect(() => {
    const calculateTimeToRead = () => {
      const wordsPerMinute = 200;
      const wordCount = (data?.content || "").split(/\s+/).length;
      const minutes = Math.ceil(wordCount / wordsPerMinute);
      setTimeToRead(`${minutes} min read`);
    };

    calculateTimeToRead();
  }, [data?.content]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = async (platform) => {
    const url = window.location.href;
    const title = data?.title;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${url}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
          "_blank"
        );
        break;
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
          "_blank"
        );
        break;
      case "copy":
        try {
          await navigator.clipboard.writeText(url);
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2000);
        } catch (err) {
          console.error("Failed to copy:", err);
        }
        break;
    }
    setIsShareMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[75vh] w-full">
        <Image
          src={data?.image}
          alt={data?.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />

        {/* Navigation */}
        <div className="absolute top-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <button
              onClick={() => router.back()}
              className="flex items-center space-x-2 text-white bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Back to {type === "events" ? "Events" : "News"}</span>
            </button>

            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white">
                <Clock3 className="w-4 h-4" />
                <span>{timeToRead}</span>
              </span>
              <span
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  type === "events" ? "bg-purple-600" : "bg-blue-600"
                } text-white backdrop-blur-sm`}
              >
                {data?.category || type}
              </span>
              <div className="relative">
                <button
                  onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white backdrop-blur-sm"
                >
                  <Share2 className="w-5 h-5" />
                </button>

                <AnimatePresence>
                  {isShareMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-xl shadow-xl z-50"
                    >
                      <div className="px-4 py-2 text-sm text-gray-500 border-b">
                        Share this {type}
                      </div>
                      <button
                        onClick={() => handleShare("facebook")}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        <Facebook className="w-4 h-4" />
                        <span>Facebook</span>
                      </button>
                      <button
                        onClick={() => handleShare("twitter")}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        <Twitter className="w-4 h-4" />
                        <span>Twitter</span>
                      </button>
                      <button
                        onClick={() => handleShare("linkedin")}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </button>
                      <button
                        onClick={() => handleShare("copy")}
                        className="flex items-center space-x-3 w-full px-4 py-2 text-sm text-gray-600 hover:bg-gray-50"
                      >
                        {copiedLink ? (
                          <>
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="text-green-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy link</span>
                          </>
                        )}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Title Section */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {data?.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-white/90">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>
                    {type === "events" ? (
                      <>
                        {formatDate(data?.startDate)}
                        {data?.endDate && data?.endDate !== data?.startDate && (
                          <> - {formatDate(data?.endDate)}</>
                        )}
                      </>
                    ) : (
                      formatDate(data?.date)
                    )}
                  </span>
                </div>

                {type === "events" && data?.location && (
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{data?.location}</span>
                  </div>
                )}

                {type === "events" && data?.expectedAttendees && (
                  <div className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{data?.expectedAttendees}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description Card */}
            <motion.div
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {type === "events" && data?.applicationDeadline && (
                <div className="bg-amber-50 border-b border-amber-100 px-8 py-4 flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-500" />
                  <p className="text-amber-800">
                    Application deadline:{" "}
                    <span className="font-semibold">
                      {formatDate(data?.applicationDeadline)}
                    </span>
                  </p>
                </div>
              )}

              <div className="p-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {data?.description}
                  </p>

                {data?.content && (
                    <div className="mt-8 text-gray-700 leading-relaxed space-y-6">
                      {data?.content.split('\n\n').map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {/* Research Details Section */}
                  {data?.category === "Research" && (
                    <div className="mt-8 space-y-8">
                      {/* Research Team */}
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">Research Team</h3>
                        <div className="space-y-4">
                          {data.leadResearcher && (
                            <div className="flex items-start gap-4 bg-white/80 rounded-lg p-4">
                              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">
                                {data.leadResearcher.split(' ')[1][0]}
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{data.leadResearcher}</p>
                                <p className="text-blue-600 text-sm">Lead Researcher</p>
                              </div>
                            </div>
                          )}
                          
                          {data.team && (
                            <div className="grid gap-3 mt-3">
                              {data.team.map((member, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-white/80 rounded-lg p-3">
                                  <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-medium">
                                    {member.split(' ')[1][0]}
                                  </div>
                                  <span className="text-gray-700">{member}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Research Objectives */}
                      {data.objectives && (
                        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
                          <h3 className="text-xl font-semibold mb-4 text-gray-900">Research Objectives</h3>
                          <div className="grid gap-4">
                            {data.objectives.map((objective, idx) => (
                              <div key={idx} className="flex items-start gap-4 bg-white/80 rounded-lg p-4">
                                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold">
                                  {idx + 1}
                                </div>
                                <p className="text-gray-700 mt-1">{objective}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Research Impact */}
                      {data.impact && (
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6">
                          <h3 className="text-xl font-semibold mb-4 text-gray-900">Expected Impact</h3>
                          <div className="flex items-start gap-4 bg-white/80 rounded-lg p-4">
                            <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center flex-shrink-0">
                              <Trophy className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-gray-700">{data.impact}</p>
                          </div>
                        </div>
                      )}

                      {/* Grant Information */}
                      {(data.grantAmount || data.duration) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                          {data.grantAmount && (
                            <div className="bg-green-50 rounded-xl p-4">
                              <p className="text-sm font-medium text-green-800 mb-1">Grant Amount</p>
                              <p className="text-2xl font-bold text-green-900">{data.grantAmount}</p>
                            </div>
                          )}
                          {data.duration && (
                            <div className="bg-blue-50 rounded-xl p-4">
                              <p className="text-sm font-medium text-blue-800 mb-1">Project Duration</p>
                              <p className="text-2xl font-bold text-blue-900">{data.duration}</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {type === "events" && (
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data?.expectedAttendees && (
                      <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                        <Users className="w-8 h-8 text-purple-500" />
                        <div>
                          <p className="text-sm font-medium text-purple-900">
                            Expected Attendees
                          </p>
                          <p className="text-purple-700">
                            {data?.expectedAttendees}
                          </p>
                        </div>
                      </div>
                    )}
                    {data?.organizers && (
                      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl">
                        <Building className="w-8 h-8 text-blue-500" />
                        <div>
                          <p className="text-sm font-medium text-blue-900">
                            Organizers
                          </p>
                          <p className="text-blue-700">
                            {data?.organizers.join(", ")}
                          </p>
                        </div>
                      </div>
                    )}
                    {data?.entry && (
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                        <GraduationCap className="w-8 h-8 text-green-500" />
                        <div>
                          <p className="text-sm font-medium text-green-900">
                            Entry Details
                          </p>
                          <p className="text-green-700">{data?.entry}</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
            {/* Event Schedule or Daily Focus */}
            {type === "events" && (data?.schedule || data?.dailyFocus) && (
              <motion.div
                className="bg-white rounded-2xl shadow-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-brandblue">
                  {data?.dailyFocus ? "Program Schedule" : "Event Schedule"}
                </h2>
                <div className="space-y-6">
                  {data?.dailyFocus
                    ? // Display Daily Focus
                      data.dailyFocus.map((day, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6"
                        >
                          <h3 className="font-semibold text-lg text-gray-800 mb-2">
                            {day.day}
                          </h3>
                          <div className="bg-white/80 rounded-lg p-4">
                            <p className="text-gray-600">{day.focus}</p>
                          </div>
                        </div>
                      ))
                    : // Display Regular Schedule
                      Array.isArray(data?.schedule) &&
                      data?.schedule.map((day, idx) => (
                        <div
                          key={idx}
                          className="border-l-4 border-purple-500 pl-4"
                        >
                          <h3 className="font-semibold text-lg text-gray-800 mb-3">
                            {day?.day || day}
                          </h3>
                          {day?.events ? (
                            <ul className="space-y-2">
                              {day?.events?.map((event, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-gray-600"
                                >
                                  <Timer className="w-5 h-5 mt-1 flex-shrink-0" />
                                  <span>{event}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-gray-600">{day}</p>
                          )}
                        </div>
                      ))}
                </div>
              </motion.div>
            )}
            {/* Mentors Section */}
            {type === "events" && data.mentors && (
              <motion.div
                className="bg-white rounded-2xl shadow-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-brandblue">
                  Meet the Mentors
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {data.mentors.map((mentor, idx) => (
                    <motion.div
                      key={idx}
                      className=" bg-white border border-gray-100 rounded-xl hover:shadow transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <a
                        href={mentor?.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow transition-all duration-300 group"
                      >
                        {/* Image */}
                        <div className="flex-shrink-0">
                          <Image
                            src={mentor?.image}
                            alt={mentor?.name}
                            width={100}
                            height={100}
                            className="object-cover rounded-full ring-4 ring-purple-100 group-hover:ring-purple-300 transition-all duration-300"
                          />
                        </div>

                        {/* Info */}
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-brandblue transition-colors duration-300">
                            {mentor?.name}
                          </h3>
                          <p className="text-gray-600 font-medium">
                            {mentor?.title}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {mentor?.company}
                          </p>
                        </div>
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
            {/* Prizes Section */}
            {type === "events" && data?.prizes && (
              <motion.div
                className="bg-white rounded-2xl shadow-sm p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-2xl font-semibold mb-6 text-brandblue">
                  Prizes & Rewards
                </h2>
                <div className="space-y-4 ">
                  {data.prizes.map((prize, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 bg-amber-50 rounded-xl p-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white font-bold">
                        {idx + 1}
                      </div>
                      <p className="text-amber-900 font-medium mt-2">{prize}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
            {/* Highlights or Features */}
            {(data?.highlights || data?.features) && (
              <motion.div
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-sm p-8 border border-purple-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                  {type === "events" ? "Event Highlights" : "Key Features"}
                </h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {(data?.highlights || data?.features).map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-4 p-4 bg-white/80 rounded-xl backdrop-blur-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                        {type === "events" ? (
                          <Trophy className="w-5 h-5 text-white" />
                        ) : (
                          <Award className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <p className="text-gray-700 font-medium">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}{" "}
            {/* Quote Section */}
            {data?.quote && (
              <motion.div
                className="relative overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-90" />
                <div className="relative bg-[url('/images/quote-bg-pattern.png')] bg-cover bg-center rounded-2xl p-10 text-white">
                  <div className="absolute top-4 left-4 w-24 h-24 text-white/10">
                    <Quote className="w-full h-full" />
                  </div>
                  <div className="max-w-3xl mx-auto text-center">
                    <blockquote className="text-2xl font-medium mb-6 leading-relaxed">
                      "{data?.quote?.text}"
                    </blockquote>
                    <cite className="flex items-center justify-center gap-2 text-lg not-italic">
                      <span className="w-8 h-[1px] bg-white/30" />
                      {data?.quote?.author}
                      <span className="w-8 h-[1px] bg-white/30" />
                    </cite>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6 sticky h-fit top-24">
            {/* Event Registration or News Category */}
            <motion.div
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {type === "events" && data?.registrationLink ? (
                <>
                  <div className="bg-gradient-to-r from-brandblue to-blue-600 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Registration Open
                    </h3>
                    <p className="text-white/90 text-sm">
                      Secure your spot for this exciting event!
                    </p>
                  </div>
                  <div className="p-6">
                    <a
                      href={data?.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-center bg-gradient-to-r from-brandblue to-blue-600 text-white px-6 py-3 rounded-md hover:from-purple-700 hover:to-blue-700 transition-all font-medium shadow-lg shadow-purple-100"
                    >
                      Register Now
                    </a>
                    {data.entry && (
                      <div className="flex items-center gap-2 mt-4 p-3 bg-purple-50 rounded-lg">
                        <Info className="w-5 h-5 text-purple-500" />
                        <p className="text-sm text-purple-700">
                          Entry: {data?.entry}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Category</h3>
                  <span className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    {data?.category}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Important Details */}
            <motion.div
              className="bg-white rounded-2xl shadow-sm p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-brandblue mb-4">
                Important Details
              </h3>
              <div className="space-y-4">
                {data?.location && (
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Location
                      </p>
                      <p className="text-gray-600">{data?.location}</p>
                    </div>
                  </div>
                )}

                {data?.contact && (
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Contact
                      </p>
                      <p className="text-gray-600">{data?.contact}</p>
                    </div>
                  </div>
                )}

                {type === "events" && data?.applicationDeadline && (
                  <div className="flex items-start gap-3">
                    <CalendarDays className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Application Deadline
                      </p>
                      <p className="text-gray-600">
                        {formatDate(data?.applicationDeadline)}
                      </p>
                    </div>
                  </div>
                )}

                {type === "events" && data?.eligibility && (
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-gray-400 mt-1" />
                    <div>
                      <p className="text-sm font-medium text-gray-700">
                        Eligibility
                      </p>
                      <p className="text-gray-600">{data?.eligibility}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Related Links */}
            {data?.relatedLinks && (
              <motion.div
                className="bg-white rounded-2xl shadow-sm p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold mb-4">Related Links</h3>
                <div className="space-y-3">
                  {data?.relatedLinks?.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 group transition-all"
                    >
                      <span className="text-gray-700 group-hover:text-purple-600">
                        {link?.label}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-purple-600" />
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tags */}
            {data?.tags && (
              <motion.div
                className="bg-white rounded-2xl shadow-sm p-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-brandblue mb-4">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data?.tags?.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
