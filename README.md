# recommand_tour

* ChatGPT를 이용한 여행 추천 서비스  

### 개발환경
- 개발환경: HTML, CSS, JavaScript

### 목표
- 사용자에게 여행 장소와 기간을 입력받아 여행 일정을 추천해주는 간단한 챗봇 만들어보기

### 사용방법
- 실행 후 여행 장소와 여행 기간 입력
- 실행 URL: [https://seungil1.github.io/recommand_tour/](https://seungil1.github.io/recommand_tour/)

  
- GitHub Repo: [https://github.com/seungil1/recommand_tour](https://github.com/seungil1/recommand_tour)

### 기능명세


```mermaid
sequenceDiagram
  participant User as User
  participant Website as Website
  participant API as API

  User ->> Website: 사용자가 메시지 입력
  Website ->> API: API로 메시지 전송

  alt 처리 성공
    API -->> Website: 메시지 처리
    Website -->> User: 처리 결과 반환
  else 처리 실패
    opt 입력한 값에서 날짜를 확인할 수 없는 경우
      Website -->> User: 에러 반환
      User -->> Website: 에러 메시지 표시하고 재시도 요청
      Website -->> API: 재시도 요청
      alt 재시도 요청
        API -->> Website: 메시지 처리
        Website -->> User: 처리 결과 반환
      else 재시도 요청
        Website -->> User: 에러 반환
        User -->> Website: 에러 메시지 표시하고 재시도 요청
        Website -->> API: 재시도 요청
      end
    end
    opt api 받아온 값을 파싱할 수 없을 때
      Website -->> User: 에러 반환
      User -->> Website: 에러 메시지 표시하고 재시도 요청
      Website -->> API: 재시도 요청
      alt 재시도 요청
        API -->> Website: 메시지 처리
        Website -->> User: 처리 결과 반환
      else 재시도 요청
        Website -->> User: 에러 반환
        User -->> Website: 에러 메시지 표시하고 재시도 요청
        Website -->> API: 재시도 요청
      end
    end
  end
```

```mermaid

graph TD;
    CI[GitHub CI/CD] -->|Deploys| LS[AWS Lightsail];
    A[Django Application] -->|Uses| DRF[Django REST Framework];
    A -->|Connects to| DB[sqlite3];
    FE[Frontend] -->|Deployed on| LS;
    LS -->|Hosts| A;
    LS -->|Hosts| FE;

    classDef framework fill:#f9f,stroke:#333,stroke-width:2px;
    classDef aws fill:#ff9,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5;
    classDef ci fill:#9cf,stroke:#33f,stroke-width:2px;
    
    class A,DRF framework;
    class LS,S3 aws;
    class CI ci;
```

