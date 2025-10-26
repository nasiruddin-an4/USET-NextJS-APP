"use client";

import React from "react";
import NoticeDetails from "./NoticeDetails";
import noticeData from "@/public/data/notice";
import { useParams } from "next/navigation";

export default function NoticePage() {
  const { slug } = useParams(); // gets the dynamic id from URL
  const notice = noticeData.find((n) => n.id == slug);

  if (!notice) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500 text-lg">Notice not found.</p>
      </div>
    );
  }

  return <NoticeDetails notice={notice} />;
}
