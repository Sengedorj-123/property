import { HouseIcon } from "./House";
import { SameText } from "./Text";

export const PropertyCard = ({ title }) => {
  return (
    <div className=" w-[100%] p-[20px] flex gap-5 bg-white rounded-[20px] shadow-md">
      <div className="w-[50%] ">
        <img src="Image.png" alt="" />
      </div>
      <div className="w-[50%] p-[10px] flex flex-col gap-8">
        <div>
          <h1 className="font-[800] text-[18px]">{title} sdasdasd</h1>
        </div>
        <div className="flex gap-5">
          <SameText text={"⭐ 4.8"} />
          <SameText text={"Mercedes Vito"} />
        </div>
        <div className="flex gap-1">
          <SameText text={"2Guests"} />
          <div className="h-[20px] mt-[3px] border border-gray-300"></div>
          <SameText text={"2Bedroom"} />
          <div className="h-[20px] mt-[3px] border border-gray-300"></div>
          <SameText text={"1Bathroom"} />
        </div>
        <div className="flex gap-3">
          <HouseIcon />
          <SameText text={"Entire Studio Apartment"} />
        </div>
      </div>
    </div>
  );
};
