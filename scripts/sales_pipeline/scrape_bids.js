#!/usr/bin/env node

/**
 * 나라장터(G2B) 및 관련 사이트 공고 수집 스크립트
 * 영업 에이전트가 주기적으로 호출하여 신규 입찰 건을 확인합니다.
 */

const KEYWORDS = ["영상 제작", "홍보 영상", "미디어 기획", "콘텐츠 제작"];

async function scrapeBids() {
  console.log(`[SalesAgent] 공고 갱신 중... (키워드: ${KEYWORDS.join(", ")})`);

  // 실제 연동 시 나라장터 OpenAPI 및 RSS 피드를 활용하여 데이터를 파싱합니다.
  // 현재는 파이프라인 개발/검증을 위한 Mock 데이터를 제공합니다.
  const mockBids = [
    {
      id: "BID-2026-001",
      title: "[긴급] 2026년 공공기관 대국민 홍보 영상물 제작 용역",
      description: "대국민 정책 홍보를 위한 3분 분량의 고화질 3D 모션그래픽 영상 제작.",
      budget: "50,000,000 KRW",
      deadline: "2026-04-30T15:00:00Z",
      source: "나라장터",
      url: "https://www.g2b.go.kr",
    },
    {
      id: "BID-2026-002",
      title: "지역 특산물 글로벌 마케팅 숏폼 영상 시리즈 제작",
      description: "틱톡 및 릴스 타겟의 15초 숏폼 10종 기획 및 제작",
      budget: "15,000,000 KRW",
      deadline: "2026-04-20T17:00:00Z",
      source: "알리오",
      url: "https://www.alio.go.kr",
    }
  ];

  // 1초 대기 (네트워크 통신 딜레이 시뮬레이션)
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log("\n[수집 완료] 신규 공고 목록:");
  console.log(JSON.stringify(mockBids, null, 2));

  return mockBids;
}

scrapeBids().catch(err => {
  console.error("에러 발생:", err);
  process.exit(1);
});
