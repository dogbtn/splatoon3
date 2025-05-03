import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import WeaponPage from "./components/WeaponPage";
import RulePage from "./components/RulePage";
import GearPage from "./components/GearPage";
import Footer from "./components/Footer"; // 푸터 추가
// App.js 상단에 CSS 파일 import 추가
import './App.css';


function App() {
  const [language, setLanguage] = useState("ko"); // "ko" or "ja"

  // 언어 전환 함수
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "ja" : "ko"));
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage language={language} />} />
        <Route path="/weapon" element={<WeaponPage language={language} />} />
        <Route path="/rule" element={<RulePage language={language} />} />
        <Route path="/gear" element={<GearPage language={language} />} />
      </Routes>

      {/* 푸터 추가 */}
      <Footer toggleLanguage={toggleLanguage} language={language} />
    </div>
  );
}

export default App;
