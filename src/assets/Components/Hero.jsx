import React from 'react'
import Cards from './Cards'
const Hero = () => {
  return (
    <>
    <div className="main border-2 rounded-md h-auto w-[90%] md:w-[95%] lg:w-[97%] my-3">
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
       <div className='bg-red-500 rounded-lg'><Cards cardValue={0} cardText={"Dues-Amount"} /></div> 
       <div className='bg-blue-500 rounded-lg'><Cards cardValue={5000} cardText={"Total Income This Year"}/></div> 
       <div className='bg-green-500 rounded-lg'><Cards cardValue={500} cardText={"Income This Month"}/></div> 
       <div className='bg-yellow-500 rounded-lg'><Cards cardValue={450} cardText={"Income Today"}/></div> 
       
    </div>
    <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
       <div className='bg-green-500 rounded-lg'><Cards cardValue={700} cardText={"Profit In This Month"}/></div> 
       <div className='bg-red-500 rounded-lg'><Cards cardValue={250} cardText={"Total Expense This Year"}/></div> 
       <div className='bg-yellow-500 rounded-lg'><Cards cardValue={100} cardText={"Expense This Month"}/></div> 
       <div className='bg-blue-500 rounded-lg'><Cards cardValue={66} cardText={"Expense Today"}/></div> 
    </div>
    </div>
    </>
  )
}

export default Hero