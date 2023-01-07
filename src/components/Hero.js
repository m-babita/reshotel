import React from 'react'
import Topbar from './Navbar/Topbar'
import SearchDropdown from './SearchDropdown/SearchDropdown'
export default function Hero() {
  return (
    <>
    <section id='home' className=" h-screen bg-fixed bg-Hero bg-cover md:bg-top bg-center" >
      <Topbar/>
      <div className="flex flex-col justify-center text-center items-center h-screen text-white">
          <SearchDropdown/>
      </div>
      </section>
    </>
  )
}
