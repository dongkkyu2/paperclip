#!/usr/bin/env node

/**
 * AI 기반 입찰 기획안 초안 자동 작성 스크립트
 * 영업 에이전트가 수집된 공고 정보를 이 스크립트에 넘겨주면, 
 * LLM을 호출하여 제안서 뼈대를 Markdown으로 출력합니다.
 */

const fs = require('fs');

async function draftProposal() {
  // 에이전트가 인자로 JSON 데이터 경로 혹은 내용을 넘길 것으로 기대함
  const args = process.argv.slice(2);
  let bidDataStr = args[0];

  if (!bidDataStr) {
    console.error("Usage: node draft_proposal.js '<json_bid_data>'");
    process.exit(1);
  }

  let bidData;
  try {
    // 인자가 파일 경로인 경우와 JSON 문자열인 경우 처리
    if (fs.existsSync(bidDataStr)) {
      bidDataStr = fs.readFileSync(bidDataStr, 'utf-8');
    }
    bidData = JSON.parse(bidDataStr);
  } catch (err) {
    console.error("JSON 파싱 에러:", err);
    process.exit(1);
  }

  console.log(`[SalesAgent] AI 기획안 초안 작성 중... 대상 공고: ${bidData.title}`);
  
  // 실제 연동 시 Anthropic/OpenAI API를 호출하여 기획안 생성
  await new Promise(resolve => setTimeout(resolve, 2000));

  const proposalMock = `
# 📝 [초안] 수주 기획안: ${bidData.title}

## 1. 프로젝트 이해
- **예산**: ${bidData.budget}
- **마감일**: ${bidData.deadline}
- **요구사항**: ${bidData.description}

## 2. 제작 컨셉 (AI 제안)
- 트렌디한 모션 그래픽과 생성형 AI 에셋을 활용하여 예산을 절감하면서도 퀄리티 극대화
- 타겟 오디언스의 시선을 사로잡는 오프닝 3초 훅(Hook) 기획

## 3. 차별화 포인트
- 당사의 1인 AI 프로덕션 파이프라인을 통한 쾌속 납기 및 수정 대응
- Paperclip 시스템을 활용한 투명한 제작 공정 공유

---
*본 기획안은 자동 생성되었습니다. CEO 오너님의 리뷰가 필요합니다.*
`;

  console.log("\n[작성 완료] 생성된 기획안:\n");
  console.log(proposalMock);
}

draftProposal().catch(console.error);
