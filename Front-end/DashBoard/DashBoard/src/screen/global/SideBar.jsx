import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { token } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import userImg from "../../assets/user.png";
const SideBar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [isCollapsed, setisCollapsed] = useState(true);
  const [selected, setselected] = useState("Dashboard");

  // eslint-disable-next-line react/prop-types
  const Item = ({ title, to, icon, selected, setselected }) => {
    const theme = useTheme();
    const colors = token(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{ color: colors.gray[100] }}
        onClick={() => setselected(title)}
        icon={icon}
      >
        <Link to={to}>
          <Typography>{title}</Typography>
        </Link>
      </MenuItem>
    );
  };
  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          backgroundColor: `${colors.primary[400]} !important`,
        },
        "& .ps-sidebar-container-test-id": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menu-button:active": {
          color: "#6870fa !important",
        },
        "& .MuiTypography-root": {
          color: `${colors.gray[100]}`,
        },
        "& .MuiTypography-root:hover": {
          color: "#868dfb !important",
        },
        "& .MuiTypography-root:active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setisCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.gray[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.gray[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setisCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* User */}
          {!isCollapsed && (
            <Box mb="75px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="Profile-img"
                  width="100px"
                  height="100px"
                  src={userImg}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.gray[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Hadeer
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Vp Fancy Adim
                </Typography>
              </Box>
            </Box>
          )}
          {/* Items */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {/* DashBoard */}
            <Item
              title="DashBoard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            {/* Mange Team */}
            <Item
              title="Mange Team"
              to="/team"
              icon={<PeopleAltOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />

            <Item
              title="Invoice Balanves"
              to="/invoice"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<Person2OutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />

            <Item
              title="Calender"
              to="/calender"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title="FAQ"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Typography
              variant="h6"
              color={colors.gray[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setselected={setselected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SideBar;
