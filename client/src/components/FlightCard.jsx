import React from 'react'
import { Button } from './ui/button'

const FlightCard = () => {
  return (
    <div className='bg-white-50 h-50 w-[900px] flex flex-col border-2 border-black gap-4 relative'>
        <h3>Milano-Madrid</h3>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col items-start'>
                <p>Deperture</p>
                <p>7.30 AM</p>
                <p>Airport: MXP</p>
            </div>
            <div className='flex flex-col items-start'>
                <p>Deperture</p>
                <p>7.30 AM</p>
                <p>Airport: MXP</p>
            </div>
            <div className='flex flex-col items-start'>
                <p>Deperture</p>
                <p>7.30 AM</p>
                <p>Airport: MXP</p>
            </div>
        </div>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col'>
                <p>PRICE: $200</p>
                <p>Round Trip</p>
            </div>
            <Button variant="default" size="lg">Book Flight</Button>
        </div>
        <div className='bg-purple-50 px-3 py-1.5 absolute top-full left-0 underline'>Check details</div>
    </div>
  )
}

export default FlightCard