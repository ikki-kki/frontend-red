# HTML HTML5는 어떤 의미인가?

Originally, HTML was primarily designed as a language for [semantically] describing scientific [documents]
원래 HTML은 과학적인 문서를 의미를 담아 기술하는 언어로서 만들어졌다.

## Semantic HTML

- Elements, attrivutes, and attribute values in HTML are defined (by this specificaion)
  to have certain meanings(semantics)
- HTML 엘리먼트와 속성, 속성값은 특정한 의미를 지니도록 정의되었다
- div를 남발할게 아니라 Html 본연의 목적에 맞게 주의해서 작성해서 작성해야 한다.
- 안좋은예: 청와대 웹 / 좋은예: 레진코믹스

- 역사적으로 웹은 문서를 표현하기 위해서 설계되었다.
- 1980년에 유럽 입자물리 연구소에서 연구원들이 문서를 공유하기 위해 inquire이라는 이름의 html을 만들었다 (팀 버너스 리)
  html이 표준이 되고 널리 사용하게 되면서 오히려 문서로서의 의미는 잃어버리고 자료로서의 가치를 가지게 됐다.

## HTML의 버전

- HTML은 버전이 없다!
- HTML5는 버즈워드 즉 존재하지 않지만 트랜드를 만들기 위해 만든 명칭일 뿐이다.
- Living Standard가 됐다는 뜻은 버전이 없이 시대에 발맞춰서 업데이트 된다.

## HTML5

- 의미를 가진 태그 대거 추가
  HTML5로 넘어오면서 의미를 지닌 태그가 대거 추가됐다[header, footer, article, section, main, nav 등]
- 의미를 기술하기 위한 Microdata도 포함 [검색엔진 데이터]
  Home > Products > G Suite Developer > Gmail > Email Markup > Reference 에서 확인할 수 있다.
  아직 당장 구글 검색 엔진에 좋은건 아니지만 이렇게 있더라~ 하고 넘어가면 될거같다
- 비주얼 요소를 의미하는 태그나 속성은 사라지거나 의미가 변함
- 멀티미디어, 네트워크 등 풍부하고 다양한 기능과 API 추가
  <canvas>, <video>, <figure>, srcset 등
  WebSokent, Wevworker, StorageAPI, History

## 지원하지 않는 브라우저는 어떻게 대처할까?

- 브라우저는 너그러운 언어이다. 만약 모르는 태그가 나오면 그냥 무시하고 넘어가버린다.
- 만약 <video>태그를 지원하지 않는 브라우저가 있다고 가정해보면 이 태그 안에 <video><img/></video> 이미지 태그를 넣을 경우
  브라우저는 모르는 <video>는 무시하고 <img/>를 보여준다

## 점진적 향상 vs 우아한 성능 저하

Progressive Enhancemanent VS Graceful Degradation

- 점진적 향상 : 브라우저가 해당 기능을 지원하지 않는다를 베이스로 시작한다.
  자바스크립트로 해당 브라우저가 기능을 지원한다면 노출한다.
- 우아한 성능 저하 : 브라우저가 해당 기능을 지원한다를 베이스로 시작한다.
  브라우저가 해당 기능을 기원하지 않으면 대체 기술을 적용한다

이 둘은 보완적으로 함께 사용되는 사례가 많다
선택기준 : 정보 접근성, 브라우저 점유율, 기능 지원 등
ㄴ 기능지원 : MDN 문서 또는 caniuse.com에서 확인
