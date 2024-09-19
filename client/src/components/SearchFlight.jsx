import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import SearchLocation from "./SearchLocation"
import DatePicker from './DatePicker'
import { Button } from './ui/button'
const SearchFlight = () => {
  return (
    <div className='p-4 bg-white-50 w-full h-48 border-2 border-black relative'>
  
        <div className='flex flex-col justify-between items-center mb-4'>
          <div className='flex ml-0 ml-0 self-start p-4'>
            <img src="" alt="Logo" />
            <h2>BOOK YOUR FLIGHT</h2>
          </div>
          <Tabs defaultValue="round-trip" className="w-[400px]">
            <TabsList className="absolute right-4 top-4">
              <TabsTrigger value="round-trip">Round Trip</TabsTrigger>
              <TabsTrigger value="one-way">One Way</TabsTrigger>
            </TabsList>
            {/* TabsContent burada Tabs bileşeninin içinde olmalı */}
            <TabsContent value="round-trip" className="flex justify-center items-center gap-8">
              <div className='flex justify-between items-center gap-2'>
                <SearchLocation />
                <SearchLocation />
              </div>
              <div className='flex justify-between items-center gap-2'>
                <DatePicker />
                <DatePicker />
              </div>
            </TabsContent>
            <TabsContent value="one-way">Change your password here.</TabsContent>
          </Tabs>
        </div>
        <Button variant="default" >Show flights</Button>
    </div>
  )
}

export default SearchFlight

