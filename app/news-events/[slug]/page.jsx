"use client";
import { eventData, newsData } from "@/public/data/news";
import { useParams } from "next/navigation";
import React from "react";
import DetailsClient from "./DetailsClient";

const DetailPage = () => {
  const { slug } = useParams();
  const data =
    newsData.find((item) => item.id === slug) ||
    eventData.find((item) => item.id === slug);
  console.log("data", data);

  // Determine the type based on which array it was found in
  const isNews = newsData.some((item) => item.id === slug);
  const isEvent = eventData.some((item) => item.id === slug);

  // Set the correct type
  const type = isNews ? "news" : isEvent ? "events" : null;

  if (!data || !type) {
    <h1>Not Found</h1>;
  }
  return (
    <div>
      <DetailsClient data={data} type={type} />
    </div>
  );
};

export default DetailPage;
