// "use client";
// import { useState } from "react";
// import { PaIcon } from "./Icon";
// import { SearchIcon } from "./SearchIcon";
// import { CallIcon } from "./CallIcon";
// import data from "../../mock/us-property-listings-100.json";

// const Header = () => {
//   const [searchValue, setSearchValue] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const names = ["Los Angeles", "Santa Monica", "California", "San Diego"];

//   const filteredNames = names.filter((name) =>
//     name.toLowerCase().includes(searchValue.toLowerCase())
//   );

//   const handleInputChange = (e) => {
//     setSearchValue(e.target.value.trim().toLowerCase());
//     setIsDropdownOpen(true);
//   };

//   const handleSuggestionClick = (name) => {
//     setSearchValue(name);
//     setIsDropdownOpen(false);
//   };

//   return (
//     <header className="container m-auto flex items-center gap-5 pt-[50px] pb-[50px]  bg-white">
//       <PaIcon />
//       <div className="flex w-[30%] border rounded-md h-[50px] ">
//         <div className="flex items-center border-r border-gray-300 px-2">
//           <select
//             defaultValue="rent"
//             className="bg-white border-none outline-none"
//           >
//             <option value="rent" disabled>
//               Rent
//             </option>
//             <option value="Buy">Buy</option>
//           </select>
//         </div>
//         <div className="relative flex items-center flex-1">
//           <input
//             type="text"
//             placeholder="Search"
//             value={searchValue}
//             onChange={handleInputChange}
//             className="w-full px-2 py-1 border-none outline-none"
//           />
//           {searchValue && isDropdownOpen && filteredNames.length > 0 && (
//             <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
//               {filteredNames.map((name) => (
//                 <div
//                   key={name}
//                   className="p-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
//                   onClick={() => handleSuggestionClick(name)}
//                 >
//                   {name}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//         <div className="flex items-center bg-[#5E81F4] h-full px-4 justify-center rounded-r-[5px]">
//           <SearchIcon className="text-white" />
//         </div>
//       </div>
//       <div className="w-[40%]"></div>
//       <div className="flex gap-2">
//         <div className="pt-[16px]">
//           <CallIcon />
//         </div>
//         <div className="pt-[10px]">
//           <h1>+976 80578075</h1>
//         </div>
//         <div className="flex ml-[20px]">
//           <div className="w-[40px] h-[40px] rounded-full border"></div>
//           <select className="outline-none">
//             <option disabled selected>
//               choose
//             </option>
//             <option>Chris Evans </option>
//             <option>Rock</option>
//             <option>Johnny Depp</option>
//             <option>Brad Pitt</option>
//           </select>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
"use client";
"use client";
import { useState, useEffect } from "react";
import { PaIcon } from "./Icon";
import { SearchIcon } from "./SearchIcon";
import { CallIcon } from "./CallIcon";
import data from "../../mock/us-property-listings-100.json"; // Adjust path if necessary

const Header = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedCity, setSelectedCity] = useState(""); // State for selected city
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cities, setCities] = useState([]);
  const [rentType, setRentType] = useState("rent"); // State for rent type

  useEffect(() => {
    // Extract city names from data
    if (data && Array.isArray(data.properties)) {
      const cityNames = data.properties
        .map((item) => item.City)
        .filter(Boolean);
      setCities([...new Set(cityNames)]); // Remove duplicates by converting to a Set
    }
  }, []);

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleInputChange = (e) => {
    setSearchValue(e.target.value.trim());
    setIsDropdownOpen(true);
  };

  const handleSuggestionClick = (city) => {
    setSelectedCity(city); // Update selected city
    setSearchValue(city); // Update input field with selected city
    setIsDropdownOpen(false); // Close dropdown
  };

  const handleRentTypeChange = (e) => {
    setRentType(e.target.value); // Update rent type
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".relative")) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
            <option value="buy">Buy</option>
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
          {searchValue && isDropdownOpen && filteredCities.length > 0 && (
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
      <div className="w-[40%]"></div>
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
