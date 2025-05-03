import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function GearPage({ language }) {
  const [randomGear, setRandomGear] = useState(""); // 랜덤으로 선택된 장비를 저장하는 상태

  // 랜덤 장비를 선택하는 함수
  const getRandomGear = () => {
    const gears = [
      { ko: "잉크 효율 업(메인)", ja: "インク効率アップ(メイン)" },
      { ko: "잉크 효율 업(서브)", ja: "インク効率アップ(サブ)" },
      { ko: "잉크 회복력 업", ja: "インク回復力アップ" },
      { ko: "인간 이동 속도 업", ja: "ヒト移動速度アップ" },
      { ko: "징어대시 속도 업", ja: "イカダッシュ速度アップ" },
      { ko: "스페셜 증가량 업", ja: "スペシャル増加量アップ" },
      { ko: "스페셜 감소량 다운", ja: "スペシャル減少量ダウン" },
      { ko: "스페셜 성능 업", ja: "スペシャル性能アップ" },
      { ko: "부활 시간 단축", ja: "復活時間短縮" },
      { ko: "슈퍼 점프 시간 단축", ja: "スーパージャンプ時間短縮" },
      { ko: "서브 성능 업", ja: "サブ性能アップ" },
      { ko: "상대 잉크 영향 감소", ja: "相手インク影響軽減" },
      { ko: "서브 영향 감소", ja: "サブ影響軽減" },
      { ko: "액션 강화", ja: "アクション強化" }
    ];

    // 랜덤으로 장비 선택
    const randomIndex = Math.floor(Math.random() * gears.length);
    setRandomGear(gears[randomIndex]);
  };

  // 컴포넌트가 마운트 될 때마다 랜덤 장비를 설정, 언어 변경 시에도 업데이트
  useEffect(() => {
    getRandomGear();
  }, [language]); // 언어가 바뀔 때마다 랜덤 장비를 다시 설정

  return (
    <div className="container mt-5">
      {/* 기어 파워 상자를 가운데로 정렬하고, 클릭 시 메인으로 이동 */}
      <div className="row text-center mb-4">
        <div className="col-12 col-md-4 mb-4 mx-auto">
          <Link to="/" className="text-decoration-none">
            <div
              className="card shadow-sm border-light rounded"
              style={{
                backgroundColor: "#fff1e6", // 배경색
                color: "#cc6b2d", // 글자색
              }}
            >
              <div className="card-body d-flex align-items-center justify-content-center">
                <img
                  src="/images/IconNPCVendor.png" // 이미지 URL
                  className="me-3"
                  alt="기어 파워 선택"
                  style={{ width: "50px", height: "50px", objectFit: "contain" }}
                />
                <h2 className="card-text">{language === "ko" ? "기어 파워" : "ギアパワー"}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* 장비 내용 */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm" style={{ border: "none" }}>
            <div className="card-body">
              {/* 랜덤 장비 출력 */}
              <p>
                {language === "ko" ? `${randomGear.ko}` : `${randomGear.ja}`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* "다시..." 버튼과 "메인으로" 버튼을 장비 카드 밖에 배치 */}
      <div className="text-center mb-4 d-flex justify-content-center gap-3">
        <Button
          onClick={getRandomGear} // 장비를 다시 선택하는 함수
          className="btn"
          style={{
            backgroundColor: "#fff1e6", // 배경색
            color: "#cc6b2d", // 글자색
            border: "none", // 테두리 없애기
            boxShadow: "none", // 그림자 없애기
          }}
        >
          {language === "ko" ? "다시..." : "もう一度..."}
        </Button>

        {/* 메인 페이지로 이동하는 버튼 */}
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            className="btn"
            style={{
              backgroundColor: "#fff1e6", // 배경색
              color: "#cc6b2d", // 글자색
              border: "none", // 테두리 없애기
              boxShadow: "none", // 그림자 없애기
            }}
          >
            {language === "ko" ? "🏠" : "🏠"}
          </Button>
        </Link>
      </div>

      {/* 푸터 위에 여백 추가 */}
      <div style={{ marginBottom: "72px" }}></div>
    </div>
  );
}

export default GearPage;
