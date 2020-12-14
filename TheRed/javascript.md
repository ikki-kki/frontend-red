# JavaScript

## 자바스크립트의 현재와 미래

1. ES6는 없다(?)

- ECMAScript 6th edition부터는 연도 표기.
- 2015년부터 해마다 새 명세가 갱신.
- 보통 "ES6"라고 하면 "ES6와 그 이후"를 의미.

2. ESM으로의 전환

- CommonJS, AMD 가 ESM으로 전환될 것.
- <script> 태그도 ESM을 지원함.

```
//ESM 예제
import $ from 'jquery';
export function myExample{}

// ESM - 웹 브라우저 모듈.
// 스크립트 태그에서 타입을 모듈로 써두면 모듈 방식을 통해서 스크립트를 불러올 수 있다.
// 아직까지는 호환성 떨어짐.
<script type="module">
  import { feature } from 'module-name"
  feature()
</script>
```

3. 자바스크립트의 미래

- JS는 10년마다 큰 변환이 생긴다는 썽이 있는데, 주기설에 의하면 올해가 3번째 주기가 시작된다.
  - ECMAScript 2015 언어 명세가 더 널리 사용될 것.
  - 모듈이 통일될 것.
- 브라우저, Node의 발전에 따라 트랜스파일러(웹팩)의 필요성이 하락할 것.
  - 예전에는 브라우저에서 지원하지 않는 ECMAScript 2015를 es5로 형식으로 변경하기 위해서 바벨과 같은 트렌스파일러를 사용했는데,
    이제 환경의 발전에 따라서 Node.js 에서는 트랜스파일러를 사용하지 않아도 될 정도이다.(아바)
  - 타입스크립트는 자체적으로 변환 환경이 포함되어있다.
  - 하지만 리액트의 .jsx 변환을 위해 아직은 필요할 수 있다.
- 자바스크립트가 아닌 자바스크립트의 시대가 온다.
  - JS가 아닌 JS: TS, WebASM, Rust, Go 등
  - 노드가 아닌 Deno
  - Rust ? Deno는 모질라 재단에서 만든 Rust 언어로 작성되었다. 최신인 만큼 여러 좋은 패러다임을 많이 받아들였다.
    WebAssembly로도 변환이 잘 된다.
  - WebAssembly ? 자바스크립트 코드를 특별한 문법과 규칙으로 작성하면 parse를 빠르게 동작한다는 개념.
    규칙이 편한게 아니라 직접 사람이 쓰는건 아니고, 다른 언어로 개발한걸 JS로 변환하는 것에 최적화 되어있다
  - 고사양 게임에 사용되는 Unreal Engine같은 것이 웹 어셈블리로 만들어졌다.

## 어휘적 환경 (Lexical Environment)

1. 정의

- 변수나 함수 등의 식별자(이름)를 정의할 때 사용되는 명세
- 중첩된 어휘적 환경에 기반해 동작
- Environment Record와 outer 속성을 포함

2. 관련 문법

- 함수 선언 Function declalaration
- 블럭문 Block statement
- Try ~ Catch 문의 Catch 절

3. 종류

- 전역 환경 Global environment
- 모듈 환경 Module environment
- 함수 환경 Function environment

## 실행 컨텍스트 (Execution Context)

1. 정의

- 자바스크립트 코드가 실행되는 환경
- 모든 JS코드는 실행 컨텍스트 내부에서 실행된다.
- 말 그래도지만 함수 실행 컨텍스트는 함수를 만들었다 해서 실행되는게 아니라 반드시 함수를 function() 식으로 실행해야 발생한다.

2. 종류

- 전역 실행 컨텍스트 Global Execution Context
- 함수 실행 컨텍스트 Function Execution Context
- eval 실행 컨텍스트 eval Execution Context (x) 성능이 안좋아서 없다고 생각하자

## 어휘적 범위 (Leical Scope)

- 같은 범위 혹은 그 보다 안쪽의 코드에서 바깥 영역에는 접근할 수 있지만 그 역은 성립하지 않는다.

```
// {}로 블럭화 시키면 다른 environment 로 인식되어 uncought reference 에러가 생긴다
function hello() {
  {
    const greeting = '안녕하세요';
  }
  console.log(greeting);
}
hello();
```

- 범위의 구분: 함수 선언, 블럭문(if, for, while), try-catch의 catch 절.

## 클로져 (Closure)

- 처음 만들어 질 때의 어휘적 범위를 그대로 유지한 함수.
- 어휘적 범위 바깥에서 해당 범위에 접근할 수 있다.

```
function hello() {
  const greeting = '안녕하세요';

  return function() {
    console.log(greeting);
  }
}

const say = hello();
say();
```

## 엄격한 모드 (Strict Mode)

1. 진입 방법

- "use strict" : 전역 영역, 함수 내에 표기
- ES2015 모듈 사용(자동 적용)

2. 일반 모드와 차이

- 조용한 에러 대신 명시적으로 에러 발생
- JS 엔진 최적화를 어렵게 하는 실수를 방지
- 향후 ES2015에 포함될 예약어/문법 대비

3. 엄격한 모드 외의 엄격함

- JS의 이상한 동작은 독특한 형변환도 원인
- 일치 연산자 === 사용 습관화
- 명시적 형변환 활용

```
<script>
'use strict';
// 전체 스크립트에 엄격한 모드 적용

function 함수() {
  'use scrict';
  // 전역으로 엄격한 모드를 설정한 게 아니라면
  // 이 함수 내에만 엄격한 모드 적용
}
</script>

// 또는 이렇게 ESM 모듈 형태로 불러오면
// app.js에는 "자동으로" 엄격한 모드 적용
<script> type="module" src="app.js"</script>
```
