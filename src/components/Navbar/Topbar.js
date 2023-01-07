import { useState } from "react";

function Topbar() {
  
  const [fix, setFix] = useState(false)
    function setNavFixed(){
        if (window.scrollY >= 152){
            setFix(true)
        } else {
            setFix(false)
        }
    }

    window.addEventListener("scroll",setNavFixed)

  
  return (
  // fixed w-full top-0 z-50
    <nav className= {`z-50 fixed w-full md:h-[75px] transition  ${fix?'bg-white shadow-lg text-black':' text-white'}`}>
      <div className=" flex items-center font-semibold justify-around py-1 ">
        <div className="p-3 z-50 md:w-auto w-full flex flex-row justify-between items-center overflow-hidden">
        
        <h1 class="font-bold  md:text-2xl">
          Reserve Hotel
        </h1>
        </div>
              
          <div className="md:text-sm text-xs">
          Need Help? Call: 12345678
          </div>

        
      </div>
    </nav>
  );
}

export default Topbar;
