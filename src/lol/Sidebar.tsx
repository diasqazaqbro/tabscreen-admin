"use client";

import {
  Avatar,
  BottomNavigation,
  BottomNavigationAction,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import React, { useState } from "react";
import ReorderSharpIcon from "@mui/icons-material/ReorderSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { deepOrange } from "@mui/material/colors";
import Favorites from "./Favorites";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState("recents");

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="flex py-5 px-3 justify-between items-center">
        <div className="">
          <IconButton onClick={() => setOpen(!open)}>
            <ReorderSharpIcon />
          </IconButton>
        </div>
        <div className="flex">
          <div className="">
            <Favorites />
          </div>
          <div className="flex items-center">
            <Avatar sx={{ bgcolor: deepOrange[500], width: 30, height: 30 }}>
              D
            </Avatar>
            <h3 onClick={handleClick}  className="px-2">Dias</h3>
            <KeyboardArrowDownSharpIcon />
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={isOpen}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Avatar /> My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Add another account
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
        </div>
      </header>
      <aside className={`${open ? "w-[83px]" : "w-[200px]"} hidden sm:block`}>
        <ul className="">
          <li className="w-[100%] hover:bg-neutral-200 py-2 px-5 rounded-md my-2">
            <a href="/flights" className="flex items-center">
              <FavoriteSharpIcon />
              <div
                className={`${
                  open
                    ? "hidden transition-all duration-500 opacity-100"
                    : "ml-4 text-sm"
                }`}
              >
                Flights
              </div>
            </a>
          </li>
        </ul>
      </aside>
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 block sm:hidden shadow-md">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    </>
  );
};

export default Sidebar;
