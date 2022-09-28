import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";
import Egitimkoclugu from "./components/pages/egitimkoclugu/Egitimkoclugu";
import Ekibimiz from "./components/pages/ekibimiz/Ekibimiz";
import Hizmetlerimiz from "./components/pages/hizmetlerimiz/Hizmetlerimiz";
import Footercustom from "./components/Footercustom";
import { Routes, Route } from "react-router-dom";
import Hakkimizda from "./components/pages/hakkimizda/Hakkimizda";
import Onlinerandevu from "./components/pages/onlinerandevu/Onlinerandevu";
import Adayform from "./components/pages/adayformu/Adayform";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Mainpage />} />
        <Route exact path="/hakkimizda" element={<Hakkimizda />} />
        <Route exact path="/egitimkoclugu" element={<Egitimkoclugu />} />
        <Route exact path="/ekibimiz" element={<Ekibimiz />} />
        <Route exact path="/hizmetlerimiz" element={<Hizmetlerimiz />} />
        <Route exact path="/onlinerandevu" element={<Onlinerandevu />} />
        <Route exact path="/onlinerandevu" element={<Onlinerandevu />} />
        <Route exact path="/adayform" element={<Adayform />} />
      </Routes>
      <Footercustom />
    </div>
  );
}

export default App;
