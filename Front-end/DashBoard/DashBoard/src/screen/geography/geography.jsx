import React from "react";
import { Box } from "@mui/material";
import Header from "../../component/Header";
import GeoChart from "../../component/GeoChart";
import { useTheme } from "@mui/material";
import { token } from "../../theme";
const Geography = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geography Chart" subTitle="Simple Geography Chart" />
      <Box
        height="75vh"
        border={`1px solid ${colors.gray[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geography;
