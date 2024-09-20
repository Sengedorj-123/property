"use client";

import { useState } from "react";
import { PropertyCard } from "./Card";
import data from "../../mock/us-property-listings-100.json";
import Header from "../header/Header";
import { SameText } from "./Text";
import { HamburgerIcon } from "./Hamburger";

export const Hero = () => {
  const [selectedCity, setSelectedCity] = useState("Los Angeles");
  const [rentType, setRentType] = useState("rent");

  const filteredProperties = data.properties.filter(
    (property) =>
      property.City === selectedCity && property.rentType === rentType
  );

  return (
    <div className="container m-auto bg-gray-100 ">
      <Header setSelectedCity={setSelectedCity} setRentType={setRentType} />
      <div className="w-1/2 flex flex-col p-5">
        <SameText text={`${filteredProperties.length} Stays`} />
        <div className="flex gap-5 pt-5 pb-5">
          <button className="px-4 py-2 border rounded-full">
            Free cancellation
          </button>
          <button className="px-4 py-2 border rounded-full">Price</button>
          <button className="px-4 py-2 border rounded-full">
            Instant Book
          </button>
          <button>
            <HamburgerIcon />
          </button>
        </div>
        <h1 className="font-bold text-2xl">Stays in {selectedCity}</h1>
        <div className="flex flex-col gap-5 mt-5">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              title={property.title}
              star={property.star}
              imageUrl={property.imageUrl}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              rentType={property.rentType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
