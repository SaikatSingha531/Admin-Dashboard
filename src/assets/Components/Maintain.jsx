import React from 'react'
import img from "./Under-Maintenance.webp"
import { BsPlugin } from "react-icons/bs";

function Maintain() {
  return (
    <>
    <div className="main flex justify-center items-center flex-col">
        <h1 className='text-4xl font-bold '>Website Is Under Maintenance <BsPlugin /></h1>
        <img src={img}  />
    </div>
      
    </>
  )
}

export default Maintain
