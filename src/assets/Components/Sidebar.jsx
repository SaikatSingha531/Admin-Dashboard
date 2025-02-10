import React from 'react'
// import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import "./Sidebar.css"
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import InfoSharpIcon from '@mui/icons-material/InfoSharp';
import { TfiDashboard } from "react-icons/tfi";
import { FaHome } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdSms } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { BiSolidUserAccount } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const [state, setState] = React.useState({
        left: false,
      });

      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
          className="bg-blue-700 text-white font-bold"
        >
          <h1 className='flex justify-center mt-2 font-bold text-2xl underline'>Demo Admin</h1>
          <List>
            {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))} */}
          </List>
          {/* <Divider /> */}


          <List>
            {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
              ))} */}

              <ListItem >
                <ListItem component={Link} to="/">
                  <ListItemIcon>
                  <FaHome/>
                  </ListItemIcon>
                  <ListItemText primary={"Home"}/>
                </ListItem>
              </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/maintain">
                <ListItemIcon>
                <TfiDashboard />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"}/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/maintain">
                <ListItemIcon>
                <IoIosPeople />
                </ListItemIcon>
                <ListItemText primary={"Staff Management"}/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/maintain">
                <ListItemIcon>
                <MdSms />
                </ListItemIcon>
                <ListItemText primary={"Public Message"}/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/maintain">
                <ListItemIcon>
                <SiGoogleclassroom />
                </ListItemIcon>
                <ListItemText primary={"Online Class"}/>
              </ListItemButton>
            </ListItem>
            
            <ListItem>
              <ListItemButton component={Link} to="/maintain">
                <ListItemIcon>
                <BiSolidUserAccount />
                </ListItemIcon>
                <ListItemText primary={"Accountants"}/>
              </ListItemButton>
            </ListItem>

            <Divider />

              
            <ListItem>
              <ListItemButton component={Link} to="/maintain">
                <ListItemIcon>
                <MdManageAccounts />
                </ListItemIcon>
                <ListItemText primary={"Manage Attendance"}/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/maintain">
                <ListItemIcon>
                <InfoSharpIcon/>
                </ListItemIcon>
                <ListItemText primary={"About Us"}/>
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton component={Link} to="/maintain">
                <ListItemIcon>
                <IoIosLogOut />
                </ListItemIcon>
                <ListItemText primary={"Logout"}/>
              </ListItemButton>
            </ListItem>

          </List>
        </Box>
      );
    

  return (
    <>
    <div className="w-[30px] h-full ">
      {/* {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}



  <MenuIcon className='icon' onClick={toggleDrawer("left",true)}/>

  <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>


    </div>
    </>
  )
}

export default Sidebar