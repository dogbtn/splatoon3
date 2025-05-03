import React from "react";
import { Button } from "react-bootstrap";

const Footer = ({ toggleLanguage, language }) => {
  return (
    <footer
      style={{
        padding: "20px 0",
        backgroundColor: "#f1f1f1",
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <p style={{ marginBottom: "10px" }}>
        {language === "ko" ? "강아지 버튼" : "こいぬボタン"}
      </p>
      {/* 언어 변경 버튼 */}
      <Button variant="outline-secondary" onClick={toggleLanguage}>
        {language === "ko" ? "日本語" : "한국어"}
      </Button>
    </footer>
  );
};

export default Footer;
