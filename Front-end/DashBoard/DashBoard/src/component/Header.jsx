import { Typography, Box, useTheme } from "@mui/material";
import { token } from "../theme";

const Header = ({ title, subTitle }) => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.gray[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subTitle}
      </Typography>
    </Box>
  );
};

export default Header;
