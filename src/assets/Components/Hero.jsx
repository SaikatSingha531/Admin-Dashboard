import React from 'react'
import Cards from './Cards'
const Hero = () => {
  return (
    <>
    <div className="main border-2 rounded-md h-auto w-[90%] md:w-[95%] lg:w-[97%] my-3">
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
       <div className='bg-red-200 text-red-700 rounded-lg hover:bg-red-300 duration-300'><Cards cardValue={0} cardText={"Dues-Amount"} /></div> 
       <div className='bg-blue-200 text-blue-700 rounded-lg hover:bg-blue-300 duration-300'><Cards cardValue={2000} cardText={"Total Income This Year"}/></div> 
       <div className='bg-green-200 text-green-700 rounded-lg hover:bg-green-300 duration-300'><Cards cardValue={200} cardText={"Income This Month"}/></div> 
       <div className='bg-yellow-200 text-yellow-700 rounded-lg hover:bg-yellow-300 duration-300'><Cards cardValue={450} cardText={"Income Today"}/></div> 
       
    </div>
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
       <div className='bg-green-200 text-green-700 rounded-lg hover:bg-green-300 duration-300'><Cards cardValue={700} cardText={"Profit In This Month"}/></div> 
       <div className='bg-red-200 text-red-700 rounded-lg hover:bg-red-300 duration-300'><Cards cardValue={250} cardText={"Total Expense This Year"}/></div> 
       <div className='bg-yellow-200 text-yellow-700 rounded-lg hover:bg-yellow-300 duration-300'><Cards cardValue={100} cardText={"Expense This Month"}/></div> 
       <div className='bg-blue-200 text-blue-700 rounded-lg hover:bg-blue-300 duration-300'><Cards cardValue={66} cardText={"Expense Today"}/></div> 
    </div>
    </div>
    </>
  )
}

export default Hero