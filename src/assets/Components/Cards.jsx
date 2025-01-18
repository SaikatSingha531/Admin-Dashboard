import React from 'react'

const Cards = (props) => {
  return (
    <>
      <div className="main p-4 h-32  text-white rounded-lg flex justify-center items-center flex-col">
        <div>
        <div className='text-3xl font-bold'>
          {props.cardValue}
        </div>
        <span>{props.cardText}</span>
        </div>

        <button className='w-full bg-red-600 rounded-md mt-auto  '>
          More Info !
        </button>
      </div>
    </>
  )
}

export default Cards