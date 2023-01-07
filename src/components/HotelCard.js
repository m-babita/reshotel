import React from 'react'
import hotel1 from '../assets/hotel1.jpg'
import hotel2 from '../assets/hotel2.jpg'
import hotel3 from '../assets/hotel3.jpg'
import hotel4 from '../assets/hotel4.jpg'
import hotel5 from '../assets/hotel5.jpg'
import map from '../assets/map.png'

function HotelCard() {
  return (
    <div className="h-screen p-6 m-6 ">
        <div className="md:flex justify-center ">
            <div className="relative flex pr-4">
                <img className=' rounded h-[25rem]' src={hotel1} alt="hotel1" />
                <div className="absolute flex justify-center rounded-full w-56 h-56 bg-white bottom-10 left-10">
                    <div className="absolute text-center text-5xl p-5 justify-center left-10 top-10 bg-green-400 rounded-full border-4 border-white h-24 w-24">V</div>
                    <div className="absolute text-center text-5xl p-5 justify-center bottom-10 right-10 bg-yellow-400 rounded-full border-4 border-white h-24 w-24">R</div>
                </div>
                
            </div>
            <div className="grid grid-cols-2 gap-2 ">
                <img className='h-[12rem] w-64 rounded' src={hotel2} alt="hotel2" />
                <img className='h-[12rem] w-64 rounded' src={hotel3} alt="hotel3" />
                <img className='h-[12rem] w-64 rounded' src={hotel4} alt="hotel4" />
                <img className='h-[12rem] w-64 rounded' src={hotel5} alt="hotel5" />

            </div>
        </div>
        <div className='mt-8 '>
            <div className='flex justify-between '>
                <div>
                    <div className="font-bold text-xl py-2">Hotel King @ PlazaOpens 
                    </div>
                    <div className="flex justify-around">
                        <div className='w-3/4'>114/4E, South West, New Delhi 110036 New Delhi, India</div>
                        <div className='text-[blue] underline'><a target='_blank' href='www.googlemap.com#'>View Map</a></div>
                    </div>
                    <div className='py-2'>+91-234523453, 982345234</div>
                    <ul className="flex px-5 gap-6 list-disc">
                        <li>Free Parking</li>
                        <li>Conference Rooms</li>
                        <li>Restraunt</li>
                        <li>Garden</li>
                    </ul>
                </div>

                <div><img className='h-[8rem] rounded' src={map} alt="map" /></div>
                
            </div>
            <div className=" py-6">Located in New Delhi, within 12 km of Qutub Minar and 13 km of MG Road, Hotel King Plaza provides accommodation with a shared lounge and as well as free private parking for guests who drive. 3-star hotel offers room service and an ATM. Offers accommodation with free WiFi, air conditioning, a garden and a terrace.</div>
        </div>
    </div>
  )
}

export default HotelCard