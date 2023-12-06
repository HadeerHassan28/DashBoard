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
          <Box
            gridColumn={`span ${3}`}
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
        ))}

        {/* Row 2 */}
        <Box
          gridColumn={`span ${8}`}
          gridRow={`span ${2}`}
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            {/* Title of line chart */}
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.gray[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            {/* Download button */}
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          {/* Line Chart */}
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transcation */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            flexDirection="column"
            borderBottom={`4px solid ${colors.primary[500]}`}
            color={colors.gray[100]}
            padding="15px"
          >
            <Typography color={colors.gray[100]} variant="h5" fontWeight="600">
              Recent Transaction
            </Typography>
            {mockTransactions.map((ele, index) => (
              <Box
                key={`${ele.txId} - ${index}`}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom={`4px solid ${colors.primary[500]}`}
                padding="15px"
              >
                {/* ID and user */}
                <Box>
                  {/* ID */}{" "}
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {ele.txId}
                  </Typography>
                  {/* user */}
                  <Typography color={colors.gray[100]}>{ele.user}</Typography>
                </Box>
                {/* date */}
                <Box color={colors.gray[100]}>{ele.date}</Box>
                {/* cost */}
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  padding="5px 10px"
                  borderRadius="4px"
                >
                  {ele.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* Row 3 */}
        {/* 1st ele */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          {/* title */}
          <Typography variant="h5" fontWeight="600">
            Compaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircul size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 Revnue Generated
            </Typography>
            <Typography>Include extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        {/* 2nd ele */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          {/* title */}
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ p: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* 3rd ele */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          {/* title */}
          <Typography variant="h5" fontWeight="600" sx={{ mb: "15px" }}>
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeoChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
