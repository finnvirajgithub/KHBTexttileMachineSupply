import React from 'react'
import '../components/PartnersStyles.css'
import singer from '../assets/singerlogo.png'
import juki from '../assets/jukilogo.png'
import abans from '../assets/abanslogo.png'
import murata from '../assets/muratalogo.png'
import reiter from '../assets/reiter.png'
import savio from '../assets/saviologo.png'
import savrer from '../assets/savrer.png'
import brother from '../assets/brotherlogo.png'
import trutzschler from '../assets/Trützschler_Logo.svg'

const Partners = () => {
  return (
    <> 
        <div className="partners-title flex flex-row justify-center font-semibold text-4xl pt-2">
            <h1 className="uppercase">Our partners</h1>
        </div>

        <div className='partners grid grid-cols-3 items-center justify-center gap-16 [&>div>img]:w-72 [&>div]:flex  [&>div]:items-center [&>div]:justify-center' >
            <div>
                <img src={singer} alt="" />
            </div>
            <div>
                <img src={juki} alt="" />
            </div>
            <div>
                <img src={abans} alt="" />
            </div>
            <div>
                <img src={murata} alt="" /> 
            </div>
            <div>
                <img src={reiter} alt="" />
            </div>
            <div>
                <img src={savio} alt="" />
            </div>
            <div>
                <img src={savrer} alt="" />
            </div>
            <div>
                <img src={brother} alt="" />
            </div>
            <div>
                <img src={trutzschler} alt="" />
            </div>
        </div>
    </>
  )
}

export default Partners;
