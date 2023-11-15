import "./App.css";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import TopBar from "./screen/global/TopBar";
import SideBar from "./screen/global/SideBar";
import Dashboard from "./screen/dashboard";
// import Team from "./screen/team";
// import Invoice from "./screen/invoice";
// import Contacts from "./screen/contacts";
// import Bar from "./screen/bar";
// import Form from "./screen/form";
// import Line from "./screen/line";
// import Pie from "./screen/pie";
// import FAQ from "./screen/faq";
// import Geography from "./screen/geography";
// import Calender from "./screen/calender";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <SideBar />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                {/* <Route path="/team" element={<Team />}></Route>
                <Route path="/contacts" element={<Contacts />}></Route>
                <Route path="/invoice" element={<Invoice />}></Route>
                <Route path="/bar" element={<Bar />}></Route>
                <Route path="/form" element={<Form />}></Route>
                <Route path="/line" element={<Line />}></Route>
                <Route path="/pie" element={<Pie />}></Route>
                <Route path="/faq" element={<FAQ />}></Route>
                <Route path="/geography" element={<Geography />}></Route>
                <Route path="/calender" element={<Calender />}></Route> */}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
