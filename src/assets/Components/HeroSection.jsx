import React from 'react'

const HeroSection = () => {
  return (
    <>
        <h1>Admin Dashboard</h1>
        <div className="main border-2 rounded-md h-auto w-[90%] md:w-[95%] lg:w-[97%] my-3">
        <div class="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
  <div class="p-4 h-28 bg-red-500 text-white rounded-lg">Card 1</div>
  <div class="p-4 bg-blue-500 text-white rounded-lg">Card 2</div>
  <div class="p-4 h-28 bg-green-500 text-white rounded-lg">Card 3</div>
  <div class="p-4 bg-yellow-500 text-white rounded-lg">Card 4</div>
</div>
<div class="grid grid-cols-2 gap-4 p-4 sm:grid-cols-2 md:grid-cols-4">
  <div class="p-4 h-28 bg-red-500 text-white rounded-lg">Card 5</div>
  <div class="p-4 bg-blue-500 text-white rounded-lg">Card 6</div>
  <div class="p-4 h-28 bg-green-500 text-white rounded-lg">Card 7</div>
  <div class="p-4 bg-yellow-500 text-white rounded-lg">Card 8</div>
</div>
        </div>
    </>
  )
}

export default HeroSection