import { Box } from "@mui/material";
import React from "react";
import Header from "../../component/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to Your Dashboard" />
      </Box>
    </Box>
  );
};

export default Dashboard;
