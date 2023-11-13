import React, { useContext } from "react";
import {
  Box,
  IconButton,
  InputBase,
  useTheme,
 ,
} from "@mui/material";
import { ColorModeContext, token } from "../../theme";
import LightModeOutlineIcon from "@mui/icon-material/LightModeOutline"
import DarkModeOutlineIcon from "@mui/icon-material/DarkModeOutline"
import NotificationsOutlineIcon from "@mui/icon-material/NotificationsOutline"
import SettingOutlineIcon from "@mui/icon-material/SettingOutline"
import PersonOutlineIcon from "@mui/icon-material/PersonOutline"
import SearchIcon from "@mui/icon-material/Search"
import { color, flexbox } from "@mui/system";
const TopBar = () => {
  const theme = useTheme()
  const colors = token(theme.palette.mode)
  const colorMode = useContext(ColorModeContext)
  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* Search */}
        <Box display="flex" backgroundColor={colors.primary[400]} borderRadius="3px">
          <InputBase sx={{ml:2,flex:1}} placeholder="Search" />
</Box>

        <IconButton ></IconButton>
    </Box>
    </>
  );
};

export default TopBar;
