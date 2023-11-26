import React, { useState } from "react";
import FullCalender, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listGrid from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../component/Header";
import { token } from "../../theme";
const Calender = () => {
  const theme = useTheme();
  const colors = token(theme.palette.mode);
  const [currentEvents, setcurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("please Enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselected();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dataStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure to delate the event "${selected.event.title}"`
      )
    )
      selected.event.remove();
  };
  return (
    <Box m="20px">
      <Header title="CALENDAR" subTitle="Full Calendar Interactive" />
      <Box display="flex" justifyContent="space-between">
        {/* Calnder Side bar */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={<Typography>{formatDate(event.start)}</Typography>}
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Calender;
