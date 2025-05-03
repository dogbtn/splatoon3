import React from "react";
import { Link } from "react-router-dom";

const MainPage = ({ language }) => {
  return (
    <div className="container my-5">
      {/* 타이틀을 두 줄로 나누고 "랜덤" 부분을 수동으로 볼드체로 설정 */}
      <h1 className="text-center mb-5">
        {language === "ko" ? (
          <>
            스플래툰 3 <br />
            <span style={{ fontWeight: "bold" }}>랜덤...</span>
          </>
        ) : (
          <>
            スプラトゥーン3 <br />
            <span style={{ fontWeight: "bold" }}>ランダム...</span>
          </>
        )}
      </h1>

      <div className="row text-center">
        {/* 첫 번째 박스: 무기 선택 */}
        <div className="col-12 col-sm-6 col-md-4 mb-4 mx-auto px-3">
          <Link to="/weapon" className="text-decoration-none">
            <div
              className="card shadow-sm rounded" // border-light 제거
              style={{
                backgroundColor: "#d5f3f9", // 배경색
                color: "#005f6b", // 글자색
                border: "none", // 테두리 없애기
              }}
            >
              <div className="card-body d-flex align-items-center">
                {/* 카드 상단에 이미지 추가 */}
                <img
                  src="/images/IconNPCWeaponShop.png" // 이미지 URL
                  className="me-3" // 오른쪽 여백
                  alt="무기 선택"
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
                <h2 className="card-text">{language === "ko" ? "무기" : "ブキ"}</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* 두 번째 박스: 룰 선택 */}
        <div className="col-12 col-sm-6 col-md-4 mb-4 mx-auto px-3">
          <Link to="/rule" className="text-decoration-none">
            <div
              className="card shadow-sm rounded" // border-light 제거
              style={{
                backgroundColor: "#ffebeb", // 배경색
                color: "#c13c3c", // 글자색
                border: "none", // 테두리 없애기
              }}
            >
              <div className="card-body d-flex align-items-center">
                {/* 카드 상단에 이미지 추가 */}
                <img
                  src="/images/IconNPCJudgeJr.png" // 이미지 URL
                  className="me-3" // 오른쪽 여백
                  alt="룰 선택"
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
                <h2 className="card-text">{language === "ko" ? "룰" : "ルール"}</h2>
              </div>
            </div>
          </Link>
        </div>

        {/* 세 번째 박스: 기어 파워 선택 */}
        <div className="col-12 col-sm-6 col-md-4 mb-4 mx-auto px-3">
          <Link to="/gear" className="text-decoration-none">
            <div
              className="card shadow-sm rounded" // border-light 제거
              style={{
                backgroundColor: "#fff1e6", // 배경색
                color: "#cc6b2d", // 글자색
                border: "none", // 테두리 없애기
              }}
            >
              <div className="card-body d-flex align-items-center">
                {/* 카드 상단에 이미지 추가 */}
                <img
                  src="/images/IconNPCVendor.png" // 이미지 URL
                  className="me-3" // 오른쪽 여백
                  alt="기어 파워 선택"
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
                <h2 className="card-text">{language === "ko" ? "기어 파워" : "ギアパワー"}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
