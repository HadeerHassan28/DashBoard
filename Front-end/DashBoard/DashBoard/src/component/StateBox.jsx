import React from "react";
import { token } from "../theme";
import { Box, useTheme, Typography } from "@mui/material";
import ProgressCircul from "./ProgressCircul";

const StateBox = ({ title, subTitle, icon, progress, increase }) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        {/* title */}
        <Box>
          {icon}{" "}
          <Typography
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.gray[100] }}
          >
            {title}
          </Typography>
        </Box>
        {/* circule */}
        <Box>
          <ProgressCircul progress={progress} />
        </Box>
        {/* suntitle */}
        <Box display="flex" justifyContent="space-between">
          {" "}
          <Typography variant="h5" sx={{ color: colors.greenAccent[500] }}>
            {subTitle}
          </Typography>
          <Typography
            variant="h5"
            fontStyle="italic"
            sx={{ color: colors.greenAccent[600] }}
          >
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StateBox;
