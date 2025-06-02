import { Box } from "@mui/material";
import "./App.css";
import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WhatWeDo from "./components/WhatWeDo";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar /> {/* Fixed positioned Navbar */}
      <Box
        component="main"
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
          overflowX: "hidden",
          margin: 0,
          paddingTop: "72px", // Adjusted for Navbar height
        }}
      >
        <Header />
        <AboutSection />
        <WhatWeDo />
        <Projects />
      </Box>
    </>
  );
}

export default App;
