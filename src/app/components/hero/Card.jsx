import { HouseIcon } from "./House";
import { SameText } from "./Text";

export const PropertyCard = ({
  title,
  star,
  imageUrl,
  bedrooms,
  bathrooms,
  rentType,
}) => {
  return (
    <div className="w-[100%] p-[20px] flex gap-5 bg-white rounded-[20px] shadow-md">
      <div className="w-[50%]">
        <img src={imageUrl} alt={title} className="rounded-[10px]" />
      </div>
      <div className="w-[50%] p-[10px] flex flex-col gap-8">
        <div>
          <h1 className="font-[800] text-[18px]">{title}</h1>
          <p className="text-gray-600">⭐ {star}</p>
        </div>
        <div className="flex gap-5">
          <SameText text={rentType === "sell" ? "For Sale" : "For Rent"} />
        </div>
        <div className="flex gap-1">
          <SameText text={`${bedrooms} Bedroom${bedrooms !== 1 ? "s" : ""}`} />
          <div className="h-[20px] mt-[3px] border border-gray-300"></div>
          <SameText
            text={`${bathrooms} Bathroom${bathrooms !== 1 ? "s" : ""}`}
          />
        </div>
        <div className="flex gap-3">
          <HouseIcon />
          <SameText text={`Entire ${title}`} />
        </div>
      </div>
    </div>
  );
};
