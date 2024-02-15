# recommand_tour
#ChatGPT를 이용한 여행 추천 서비스

## 개발환경

* 개발환경: HTML, CSS, JavaScript
  

## 목표

* 사용자에게 여행 장소와 기간을 입력받아 여행일정을 추천해주는 간단한 챗봇만들어보기

## 사용방법

* 실행후 여행장소와 여행기간 입력


## 기능



```mermaid
graph TD
  subgraph User
    A[사용자 입력]
  end

  subgraph 챗봇 엔진
    B[자연어 처리]
    C[의도 파악]
    D[응답 생성]
  end

  subgraph 시스템
    E[외부 시스템 연동]
    F[데이터베이스 조회]
  end

  subgraph 응답
    G[챗봇 응답]
  end

  A -->|사용자 입력| B
  B -->|자연어 처리| C
  C -->|의도 파악| D
  D -->|응답 생성| G

  C -->|외부 시스템 연동| E
  C -->|데이터베이스 조회| F
```

* 실행 URL: https://seungil1.github.io/recommand_tour/
* github repo: https://github.com/seungil1/recommand_tour
