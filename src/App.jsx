import { Route, Routes } from "react-router-dom";

import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useScrollToTop } from "./hooks/useScrollToTop";

import Home from "./scenes/home/Home";
import Technology from "./scenes/technology/Technology";

function App() {
  const showScrollToTop = useScrollToTop();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>

      <ScrollToTop showScrollTop={showScrollToTop} />
      <Footer />
    </>
  );
}

export default App;
