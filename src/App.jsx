import { Route, Routes } from "react-router-dom";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import About from "./scenes/about/About";
import Footer from "./scenes/global/Footer";

function App() {
  return (
    <>
      <div className="">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
