import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import React from "react";
import Header from "../../component/Header";
import { token } from "../../theme";
import { mockTransactions } from "../../Data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../../component/LineChart";
import GeoChart from "../../component/GeoChart";
import BarChart from "../../component/BarCharts";
import StateBox from "../../component/StateBox";
import ProgressCircul from "../../component/ProgressCircul";
import PointOfSale from "@mui/icons-material/PointOfSale";
const Dashboard = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const firstRow = [
    {
      title: "12,361",
      subTitle: "Emails Sent",
      progress: "0.75",
      increase: "+14%",
      icon: (
        <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px" }} />
      ),
    },
    {
      title: "431,225",
      subTitle: "Sales Obtained",
      progress: "0.5",
      increase: "+21%",
      icon: (
        <PointOfSale
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
    {
      title: "32,442",
      subTitle: "New Clients",
      progress: "0.30",
      increase: "+5%",
      icon: (
        <PersonAddIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
    {
      title: "1,325,134",
      subTitle: "Traffic Inbound",
      progress: "0.80",
      increase: "+43%",
      icon: (
        <TrafficIcon
          sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
        />
      ),
    },
  ];
  return (
    <Box m="20px">
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subTitle="Welcome to Your Dashboard" />
      </Box>
      {/* Button */}
      <Box>
        <Button
          sx={{
            background: colors.blueAccent[700],
            color: colors.gray[100],
            fontsize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Report
        </Button>
      </Box>
      {/* Grid and charts */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        {firstRow.map((ele, index) => (
          <>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[400]}
              display="flex"
              alignItems="center"
              justifyContent="center"
              key={index}
            >
              <StateBox
                title={ele.title}
                subTitle={ele.subTitle}
                progress={ele.progress}
                increase={ele.increase}
                icon={ele.icon}
              />
            </Box>
          </>
        ))}
      </Box>
    </Box>
  );
};

export default Dashboard;
