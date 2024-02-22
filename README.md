# recommand_tour

* ChatGPT를 이용한 여행 추천 서비스  

<h2>개발환경<h2/>
<br /> 
* 개발환경: HTML, CSS, JavaScript
<br /> 
<h2>목표<h2/>


* 사용자에게 여행 장소와 기간을 입력받아 여행일정을 추천해주는 간단한 챗봇만들어보기


<h2>사용방법<h2/>

 
* 실행후 여행장소와 여행기간 입력


* 실행 URL: https://seungil1.github.io/recommand_tour/
* github repo: https://github.com/seungil1/recommand_tour


<h2>기능명세<h2/>


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

