import React, { useContext } from "react";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import { ColorModeContext, token } from "../../theme";
import LightModeSharpIcon from "@mui/icons-material/LightModeSharp";
import DarkModeSharpIcon from "@mui/icons-material/DarkModeSharp";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import SettingsSharpIcon from "@mui/icons-material/SettingsSharp";
import Person2SharpIcon from "@mui/icons-material/Person2Sharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";

const TopBar = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        {/* Search */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
          <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
          <IconButton type="button" sx={{ p: 1 }}>
            <SearchSharpIcon />
          </IconButton>
        </Box>

        {/* Icons */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeSharpIcon />
            ) : (
              <LightModeSharpIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsNoneSharpIcon />
          </IconButton>
          <IconButton>
            <SettingsSharpIcon />
          </IconButton>
          <IconButton>
            <Person2SharpIcon />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};

export default TopBar;
