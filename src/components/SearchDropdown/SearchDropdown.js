import React, { useState } from "react";

function InputWithSearch() {
  const [setVal] = useState("");
  const data = ["12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"];
  const location = ["7 PM","8 PM","9 PM", "10 PM", "11 PM", "12 AM"];
  const type = [
    "Rooms",
    "Adults",
    "Children",
  ];
  return (
    <>
      <div className="flex flex-col items-center md:grid grid-cols-4 justify-center">
        
        <div className="my-5 pl-4 rounded md:rounded-none md:rounded-l bg-white">
        <label class="relative text-gray-400 focus-within:text-gray-600 block">
          <ion-icon name="calendar-outline"></ion-icon>
          <input className=" h-16 py-2 pl-2 "
            list="data"
            onChange={(e) => setVal(e.target.value)}
            placeholder="Check in"
          />
          <datalist id="data">
            
            {data.map((op) => (
              <option>{op}</option>
            ))}
          </datalist>
          
          </label>
        </div>
        <div className="my-5 pl-4 rounded md:rounded-none bg-white">
        <label class="relative text-gray-400 focus-within:text-gray-600 block">
          <ion-icon name="calendar-outline"></ion-icon>
          <input className=" h-16 py-2 pl-2 "
            list="location"
            onChange={(e) => setVal(e.target.value)}
            placeholder="Check out"
          />
          <datalist id="location">
            
            {location.map((op) => (
              <option>{op}</option>
            ))}
          </datalist>
          </label>
        </div>
        <div className="my-5 pl-4 rounded md:rounded-none  bg-white">
        <label class="relative text-gray-400 focus-within:text-gray-600 block">
          
          <input className=" h-16 py-2 pl-2 "
            list="type"
            onChange={(e) => setVal(e.target.value)}
            placeholder="adults children rooms"
          />
          <datalist id="type">
            
            {type.map((op) => (
              <option>{op}</option>
            ))}
          </datalist>
          </label>
        </div>
        <button className="text-black text-lg font-semibold bg-yellow-400 h-16 py-2 px-5 rounded md:rounded-none md:rounded-r">Search Now</button>
              </div>
      
    </>
  );
}
export default InputWithSearch;
