# Welcome to enkor Frontend skill assessment

---

### 구현 내용

- Main List Page와 Item Detail Page 구현 및 동적 라우팅 구현
- Sorting (university, houseType) 기능 구현
- ENKOR STAY 사이트 디자인 클론
- 반응형 화면 구현

### 아쉬운 점

- 테스트 코드 작성하지 못한 점
- sorting 로직으로 인해 복잡하게 구현된 MainListPage 코드 리팩토링
- `useNavigate`로 처리하고 싶었으나 초기세팅과 관련한 문제로 `window.history`로 처리함
- eslint, prettier 로 작업하지 못한 점

---

### 다음의 요구사항들을 충족시켜서 구현해주시면 됩니다.

구현해주실 페이지는 다음과 같습니다.

1. Main List page
2. List Item detail page

### 주어진 사항

데이터는 통신을 완료했다는 가정하여 시작합니다.
데이터는 src내에 있는 data 디렉토리 내에 json 포멧으로 존재합니다.
이 데이터를 기반으로 요구사항을 충족하는 뷰를 구현해주시면 됩니다.

## 요구사항

- Main List page가 앱을 실행했을떄 보이는 페이지로 구현해주세요.
- Main List page에 있는 각 item들은 위에서 아래로 차례로 보이도록 구현해주세요
  - 순서는 item의 id 순서대로 보이게 해주세요.
- Main List page에 있는 item을 클릭 시 item detail 페이지로 이동하도록 해주세요.
- List Item detail page에 있는 콘텐츠들은 중앙정렬 시켜주세요.
- Main List page에서 각 아이템을 university, houseType에 따라서 sorting해서 보여지는 기능을 구현해주세요.
