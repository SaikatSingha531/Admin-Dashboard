import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { CgProfile } from "react-icons/cg";
import { IoPersonAddSharp } from "react-icons/io5";
import { TiGroup } from "react-icons/ti";
import { MdNotificationsActive } from "react-icons/md";
import { FaFileArchive } from "react-icons/fa";


const HeroNav = () => {
  return (
    <>
      <div className="bg-blue-500 w-[90%] mx-[5px] h-16 md:w-[95%] lg:w-[97%] my-2 rounded-md flex justify-center items-center gap-4 overflow-x-auto px-2">
        <Tooltip title="Profile" placement="top">
          <div className="bg-orange-500 h-10 w-10 rounded-md flex justify-center items-center ">
          <CgProfile />
          </div>
        </Tooltip>
        <Tooltip title="Add New" placement="top">
          <div className="bg-orange-500 h-10 w-10 rounded-md flex justify-center items-center ">
            <IoPersonAddSharp />
          </div>
        </Tooltip>
        <Tooltip title="All Members" placement="top">
          <div className="bg-orange-500 h-10 w-10 rounded-md flex justify-center items-center ">
            <TiGroup />
          </div>
        </Tooltip>
        <Tooltip title="Notification" placement="top">
          <div className="bg-orange-500 h-10 w-10 rounded-md flex justify-center items-center ">
            <MdNotificationsActive />
          </div>
        </Tooltip>
        <Tooltip title="All Files" placement="top">
          <div className="bg-orange-500 h-10 w-10 rounded-md flex justify-center items-center ">
          <FaFileArchive />
          </div>
        </Tooltip>
        {/* <Tooltip title="Add New" placement="top">
          <div className="bg-orange-500 h-10 w-10 rounded-md flex justify-center items-center ">
            +
          </div>
        </Tooltip>
        <Tooltip title="Add New" placement="top">
          <div className="bg-orange-500 h-10 w-10 rounded-md flex justify-center items-center ">
            +
          </div>
        </Tooltip> */}
      </div>
    </>
  );
};

export default HeroNav;
