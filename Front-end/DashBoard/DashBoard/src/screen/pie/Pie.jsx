import React from "react";
import { Box } from "@mui/material";
import Header from "../../component/Header";
import PieChart from "../../component/PieChart";
const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subTitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
