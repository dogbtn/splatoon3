import React, { useState } from "react";
import weapons from "../data/weapons.json"; // JSON 위치에 맞게 경로 조정하세요
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"; // Link import 추가

function WeaponPage({ language }) {
  const [selectedWeapons, setSelectedWeapons] = useState([]);
  const [numPlayers, setNumPlayers] = useState(1); // 기본적으로 8명을 선택
  const [hasSelectedWeapons, setHasSelectedWeapons] = useState(false); // 무기 선택 여부를 관리

  const handlePlayerChange = (event) => {
    setNumPlayers(parseInt(event.target.value)); // 인원 수를 선택
  };

  const getRandomWeapons = () => {
    // weapons 배열을 중복을 허용하여 여러 번 섞어서 뽑음
    const shuffled = [];
    for (let i = 0; i < numPlayers; i++) {
      shuffled.push(weapons[Math.floor(Math.random() * weapons.length)]); // 무기 데이터를 중복하여 가져옴
    }
    setSelectedWeapons(shuffled);
    setHasSelectedWeapons(true); // 무기 선택 완료 상태로 변경
  };

  const handleResetWeapons = () => {
    // "다시..." 버튼 클릭 시 무기만 다시 선택
    getRandomWeapons();
  };

  return (
    <div className="container mt-5">
      {/* 첫 번째 박스: 무기 선택, 가운데 정렬 */}
      <div className="row text-center mb-5">
        <div className="col-12 col-sm-6 col-md-4 mb-4 mx-auto px-3">
          <Link to="/" className="text-decoration-none"> {/* 카드 클릭 시 메인 페이지로 이동 */}
            <div
              className="card shadow-sm rounded" // border-light 제거, border:none 추가
              style={{
                backgroundColor: "#d5f3f9", // 배경색
                color: "#005f6b", // 글자색
                border: "none", // 테두리 없애기
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                {/* 카드 상단에 이미지 추가 */}
                <img
                  src="/images/IconNPCWeaponShop.png" // 이미지 URL
                  className="me-3"
                  alt="무기 선택"
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
                <h2 className="card-text">{language === "ko" ? "무기" : "ブキ"}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 플레이어 수 선택, 텍스트, 버튼을 한 줄로 배치 */}
      {!hasSelectedWeapons && (
        <div className="d-flex justify-content-center mb-4 align-items-center">
          <Form.Label className="me-3 mb-0">{language === "ko" ? "플레이어는" : "プレイヤーは"}</Form.Label>
          <Form.Group controlId="numPlayers" className="me-3 mb-0">
            <Form.Control
              as="select"
              value={numPlayers}
              onChange={handlePlayerChange}
              style={{ maxWidth: "80px" }}
            >
              {[...Array(8)].map((_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}{language === "ko" ? "명" : "人"}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          <Button
            onClick={getRandomWeapons}
            className="btn"
            variant="btn btn-secondary"
          >
            {language === "ko" ? "입니다!" : "です！"}
          </Button>
        </div>
      )}

      {/* 랜덤 무기 선택 결과 표시 */}
      {hasSelectedWeapons && (
        <div className="row">
          {selectedWeapons.map((weapon, index) => (
            <div className="col-12 col-md-3 mb-4" key={index}>
              <div className="card h-100 shadow-sm" style={{ border: "none" }}>
                <div className="card-body">
                  <h5 className="card-title">
                    {language === "ko" ? `플레이어 ${index + 1}` : `プレイヤー ${index + 1}`}
                  </h5>
                  <hr />
                  <p>
                    <strong>{language === "ko" ? "무기" : "ブキ"}: </strong>
                    {language === "ko" ? weapon.name : weapon.name_ja}
                  </p>
                  <p>
                    <strong>{language === "ko" ? "서브" : "サブ"}: </strong>
                    {language === "ko" ? weapon.sub : weapon.sub_ja}
                  </p>
                  <p>
                    <strong>{language === "ko" ? "스페셜" : "スペシャル"}: </strong>
                    {language === "ko" ? weapon.special : weapon.special_ja}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* "다시..." 버튼과 "메인으로" 버튼을 무기 결과 아래에 위치시키고 색상 변경 */}
      {hasSelectedWeapons && (
        <div className="text-center mb-4 d-flex justify-content-center gap-3">
          <Button
            onClick={handleResetWeapons} // "다시..." 버튼 클릭 시 기존 인원 수로 다시 뽑기
            variant="btn btn-secondary"
          >
            {language === "ko" ? "다시..." : "もう一度..."}
          </Button>

          {/* 메인 페이지로 돌아가는 버튼 추가 */}
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
      <div style={{ marginBottom: "72px" }}></div>
    </div>
  );
}

export default WeaponPage;
