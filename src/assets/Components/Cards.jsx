import React from 'react'

const Cards = (props) => {
  return (
    <>
      <div className="main p-4 h-32 rounded-lg flex justify-center items-center flex-col">
        <div>
        <div className='text-3xl font-bold'>
          {props.cardValue}
        </div>
        <span>{props.cardText}</span>
        </div>

        <button className='w-full bg-gray-600 text-white  rounded-md mt-auto hover:bg-gray-900 duration-300'>
          More Info !
        </button>
      </div>
    </>
  )
}

export default Cards