import "./App.css";
import Main from "./pages/Main";
// import Timeline from "./pages/Timeline";
import { Routes, Route } from "react-router-dom";
import VerticalTimeline from "./pages/VerticalTimeline";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/timeline" element={<VerticalTimeline />} />

        {/* <Route path="/timeline" element={<Timeline/>} /> */}
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
