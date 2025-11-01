"use client";
import { Calendar, FileText, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function NoticeDetails({ notice }) {
  const hasPDF = !!notice.pdf;
  const hasImage = !!notice.image;

  return (
    <div className="bg-slate-50">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-20 space-y-12">
        {/* Header Section */}
        <div className="space-y-6">
          {/* Title */}
          <div className="">
            <h1 className="text-2xl md:text-4xl font-bold text-brandblue leading-tight text-balance mb-2">
              {notice.title}
            </h1>
            {/* Meta Information */}
            <div className="flex flex-wrap gap-2 items-center">
              <Calendar className="w-5 h-5 text-slate-600" />
              <p className="text-xs text-slate-500 uppercase tracking-wide">
                Published:
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {notice.date}
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="prose prose-lg max-w-none">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p className="whitespace-pre-line text-base md:text-lg">
              {notice.content}
            </p>
          </div>
        </div>

        {/* Featured Image */}
        {hasImage && (
          <div className="relative w-full h-96 md:h-[900px] rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 transition-shadow duration-300">
            <Image
              src={notice.image || "/placeholder.svg"}
              alt={notice.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* PDF Download Section */}
        {hasPDF && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-blue-600 font-semibold uppercase tracking-wide">
                    Full Document
                  </p>
                  <p className="text-slate-900 font-semibold">
                    Download PDF for complete details
                  </p>
                </div>
              </div>
              <a
                href={notice.pdf}
                download
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 whitespace-nowrap"
              >
                <Download size={20} />
                Download PDF
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
