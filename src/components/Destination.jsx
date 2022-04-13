import React from 'react'
import aircraft from '../assets/aircraft.jpeg';
import train from '../assets/train.jpg';
import taxi from '../assets/taxi.jpg';
import ship from '../assets/ship.jpeg';

const Destination = () => {
  return (
    <>
    <section className='grid'>
        <h1>Find The Perfect Place To Go</h1>

        <div className='grid-items'>
            <div>
                <img src={aircraft} alt='Travel By Air'/>
               <h3>Book Your Flight</h3>
                <p>Get your visa and book your tickets with us...</p>
            </div>

            <div>
                <img src={train} alt='Travel By Train'/>
               <h3> 24/7 Services available </h3>
                <p>Safe and comfortable for your Journey</p>
            </div>

            <div>
                <img src={ship} alt='Travel by Ship'/>
               <h3>Maritime Transportation</h3>
                <p>Experience the wonders of the sea in your next Journey</p>
            </div>

            <div>
                <img src={taxi} alt='Travel By taxi'/>
               <h3>Our drivers are always close to your door</h3>
                <p>No reckless driving, your safety is our priority</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Destination