import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Mastering from "./components/Mastering/Mastering";
import Bio from "./components/Bio/Bio";
import Dj from "./components/Dj/Dj";
import Footer from "./components/Footer/Footer";
import WhatsAppButton from "./components/WhatsAppBtn/WhatsAppBtn";
import Production from "./components/Production/Production";
import Mix from "./components/Mix/Mix";
import Guitar from "./components/Academy/Guitar/Guitar";
import MusicProd from "./components/Academy/MusicProduction/MusicProd";
import Piano from "./components/Academy/Piano/Piano";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Mix" element={<Mix />} />
        <Route path="/Production" element={<Production />} />
        <Route path="/Mastering" element={<Mastering />} />
        <Route path="/Dj" element={<Dj />} />
        <Route path="/Bio" element={<Bio />} />
        <Route path="/academy/guitar" element={<Guitar />} />
        <Route path="/academy/piano" element={<Piano />} />
        <Route path="/academy/music-production" element={<MusicProd />} />
      </Routes>
      <WhatsAppButton phoneNumber="+5491167688469" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
