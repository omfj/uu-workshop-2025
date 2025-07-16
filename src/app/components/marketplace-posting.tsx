/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TMarketplacePosting } from "@/app/db/db-crud";

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
        alt={description}
        className="w-[300px] h-[300px] object-cover rounded-md"
      />

      <h3 className="text-lg mt-3 mb-1">{title}</h3>
      <p className="text-gray-600 mb-2">{description}</p>

      <div className="flex justify-between items-center">
        <span className="font-bold text-base text-[#aaa]">{price}</span>
        <span className="text-gray-400 text-sm">{date.toLocaleString()}</span>
      </div>
    </li>
  );
};

export default MarketplacePosting;
