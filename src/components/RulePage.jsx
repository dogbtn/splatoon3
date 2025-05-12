import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function RulePage({ language, toggleLanguage }) {
  const [showRules, setShowRules] = useState(true); // 룰을 보여줄지 여부를 상태로 관리
  const [randomRule, setRandomRule] = useState(""); // 랜덤으로 선택된 룰을 저장하는 상태

  // 랜덤 룰을 선택하는 함수
  const getRandomRule = () => {
    const rules = [
      { ko: "영역 배틀", ja: "ナワバリバトル" },
      { ko: "랭크 에어리어", ja: "ガチエリア" },
      { ko: "랭크 타워", ja: "ガチヤグラ" },
      { ko: "랭크 피시 배틀", ja: "ガチホコバトル" },
      { ko: "랭크 바지락", ja: "ガチアサリ" },
    ];

    // 랜덤으로 룰 선택
    const randomIndex = Math.floor(Math.random() * rules.length);
    setRandomRule(rules[randomIndex]);
  };

  // 컴포넌트가 마운트 될 때마다 랜덤 룰을 설정, 언어 변경 시에도 업데이트
  useEffect(() => {
    getRandomRule();
  }, [language]); // 언어가 바뀔 때마다 랜덤 룰을 다시 설정

  const handleShowRules = () => {
    setShowRules(true); // 룰을 다시 보이게 하는 함수
    getRandomRule(); // "다시..." 버튼 클릭 시 랜덤 룰을 새로 설정
  };

  return (
    <div className="container mt-5">
      {/* 룰 선택 상자: 가운데 정렬 */}
      <div className="row text-center mb-4">
        <div className="col-12 col-sm-6 col-md-4 mb-4 mx-auto px-3">
          <Link to="/" className="text-decoration-none">
            <div
              className="card shadow-sm rounded"
              style={{
                backgroundColor: "#ffebeb", // 배경색
                color: "#c13c3c", // 글자색
                border: "none", // 테두리 없애기
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <img
                  src="/images/IconNPCJudgeJr.png" // 이미지 URL
                  className="me-3"
                  alt="룰 선택"
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
                <h2 className="card-text">{language === "ko" ? "룰" : "ルール"}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 룰 내용 */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm" style={{ border: "none" }}>
            <div className="card-body">
              {showRules && (
                <>
                  {/* 랜덤 룰 출력 */}
                  <p>
                    {language === "ko" ? `${randomRule.ko}` : `${randomRule.ja}`}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* "다시..." 버튼과 "메인으로" 버튼을 룰 카드 밖에 배치 */}
      {showRules && (
        <div className="text-center mb-4 d-flex justify-content-center gap-3">
          <Button
            onClick={handleShowRules} // 룰을 다시 보여주는 함수
            variant="btn btn-secondary"
          >
            {language === "ko" ? "다시..." : "もう一度..."}
          </Button>

          {/* 메인 페이지로 이동하는 버튼 */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="btn btn-outline-secondary"
            >
              {language === "ko" ? "홈으로" : "ホームへ"}
            </Button>
          </Link>
        </div>
      )}

      {/* 푸터 위에 여백 추가 */}
      <div style={{ marginBottom: "72px" }}></div> {/* 푸터 위로 여백 추가 */}
    </div>
  );
}

export default RulePage;
