"use client";

import { PropertyCard } from "./Card";
import { HamburgerIcon } from "./Hamburger";
import { SameText } from "./Text";

export const Hero = () => {
  return (
    <div className="container m-auto  bg-gray-100">
      <div className="w-full flex justify-between">
        <div className="w-[50%]  p-[10px] ">
          <SameText text={"430 +Stays"} />
          <h1 className="font-[800] text-[36px] pt-[20px]">
            Stays in Los Angeles
          </h1>
          <div className="flex pt-[30px] gap-5 pb-[20px]">
            <button className="py-[10px] px-[30px] rounded-[30px] border">
              Free cansellation
            </button>
            <button className="py-[10px] px-[30px] rounded-[30px] border">
              Price
            </button>
            <button className="py-[10px] px-[30px] rounded-[30px] border">
              Instant Book
            </button>
            <button>
              <HamburgerIcon />
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <PropertyCard title={"Fully Furnished Smart Studio Apartment"} />
            <PropertyCard title={"Fully Furnished Smart Studio Apartment"} />
            <PropertyCard title={"Fully Furnished Smart Studio Apartment"} />
          </div>
        </div>
        <div className="w-[50%]"></div>
      </div>
    </div>
  );
};
