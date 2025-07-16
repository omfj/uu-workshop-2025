/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TMarketplacePosting } from "@/app/db/db-crud";

const formatDate = (date: Date | string) => {
  const d = new Date(date);

  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const MarketplacePosting: React.FC<TMarketplacePosting> = ({
  imageUrl,
  title,
  description,
  price,
  date,
}) => {
  return (
    <li className="border border-gray-200 rounded-lg p-4 max-w-xs shadow-sm bg-white">
      <img
        src={imageUrl}
        alt={`Image of ${title} posting`}
        className="w-[300px] h-[300px] object-cover rounded-md"
      />

      <h3 className="text-lg mt-3 mb-1">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>

      <div className="flex justify-between items-center">
        <span className="font-bold text-base text-gray-400">{price} USD</span>
        <span className="text-gray-400 text-sm">{formatDate(date)}</span>
      </div>
    </li>
  );
};

export default MarketplacePosting;
