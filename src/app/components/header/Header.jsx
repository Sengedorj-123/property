"use client";
import { useState } from "react";
import { PaIcon } from "./Icon";
import { SearchIcon } from "./SearchIcon";
import { CallIcon } from "./CallIcon";
import data from "../../mock/us-property-listings-100.json";

const Header = ({ setSelectedCity, setRentType }) => {
  const [searchValue, setSearchValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [rentType, updateRentType] = useState("rent");

  const filteredProperties = data.properties.filter(
    (property) => property.rentType === rentType
  );

  const cities = Array.from(
    new Set(filteredProperties.map((property) => property.City))
  );

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchValue(e.target.value.trim());
    setIsDropdownOpen(e.target.value.length > 0 && filteredCities.length > 0);
  };

  const handleSuggestionClick = (city) => {
    setSearchValue(city);
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  const handleRentTypeChange = (e) => {
    const value = e.target.value;
    updateRentType(value);
    setRentType(value);
    setSearchValue("");
    setIsDropdownOpen(false);
  };

  return (
    <header className="container m-auto flex items-center gap-5 pt-[50px] pb-[50px] bg-white">
      <PaIcon />
      <div className="flex w-[30%] border rounded-md h-[50px]">
        <div className="flex items-center border-r border-gray-300 px-2">
          <select
            value={rentType}
            onChange={handleRentTypeChange}
            className="bg-white border-none outline-none"
          >
            <option value="rent">Rent</option>
            <option value="sell">Sell</option>
          </select>
        </div>
        <div className="relative flex items-center flex-1">
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={handleInputChange}
            className="w-full px-2 py-1 border-none outline-none"
          />
          {isDropdownOpen && filteredCities.length > 0 && (
            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
              {filteredCities.map((city) => (
                <div
                  key={city}
                  className="p-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center bg-[#5E81F4] h-full px-4 justify-center rounded-r-[5px]">
          <SearchIcon className="text-white" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="pt-[16px]">
          <CallIcon />
        </div>
        <div className="pt-[10px]">
          <h1>+976 80578075</h1>
        </div>
        <div className="flex ml-[20px]">
          <div className="w-[40px] h-[40px] rounded-full border"></div>
          <select className="outline-none">
            <option disabled selected>
              Choose
            </option>
            <option>Chris Evans</option>
            <option>Rock</option>
            <option>Johnny Depp</option>
            <option>Brad Pitt</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
