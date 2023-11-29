import React from "react";
import {
  Box,
  Typography,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import Header from "../../component/Header";
import { token } from "../../theme";
const FAQ = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const questions = [
    {
      title: "An Important Question",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolorum corporis quibusdam dolor, enim necessitatibus fuga? Repellat adipisci in obcaecati iste ipsum quod, facilis enim natus aliquam quas, minima repudiandae.",
    },
    {
      title: " Question 2",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolorum corporis quibusdam dolor, enim necessitatibus fuga? Repellat adipisci in obcaecati iste ipsum quod, facilis enim natus aliquam quas, minima repudiandae.",
    },
    {
      title: " Question 3",
      des: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In dolorum corporis quibusdam dolor, enim necessitatibus fuga? Repellat adipisci in obcaecati iste ipsum quod, facilis enim natus aliquam quas, minima repudiandae.",
    },
  ];
  return (
    <Box m="20px">
      <Header title="FAQ" subTitle="Frequently Asked Questions Page" />

      {questions.map((ele, index) => (
        <Accordion defaultExpanded>
          {/* title that apeare before expand */}
          <AccordionSummary expandIcon={<ExpandMoreOutlinedIcon />} key={index}>
            <Typography color={colors.greenAccent[500]} variant="h5">
              {ele.title}
            </Typography>
          </AccordionSummary>
          {/* details that appeare when it expaned */}
          <AccordionDetails>
            <Typography>{ele.des}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
