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
- === 는 타입의 형태까지 확인 하기 때문에 반드시 사용해줘야 한다.
- 명시적 형변환 활용

--

- 만약 바닐라 자바스크립트로 코딩을 할 때는 반드시 엄격한 모드로 사용하도록 하자

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

## 비동기 자바스크립트 (Asynchronous JavaScript)

1. 비동기 처리는 필연

- 기능 대부분을 외부 API에 의존하고 있기 떄문
- 외부 API를 호출하고 결과를 '콜백'으로 전달받기 때문
- 생각보다 자바스크립트 언어가 차지하는 비율은 작고 외부의 API, DOM을 호출해서 다룬다
- 웹페이지에서 DOM을 읽어들인 이후에 실행하는 것도 비동기다. 자바스크립트에는 DOM이라는게 없음!
- web API에 정의된 document.object를 통해서 이 웹페이지가 언제 읽어졌고, 준비하는지 모든것들이 비동기.
- 사용자의 클릭 이벤트를 읽어들이는 것들도 모두 비동기다.

```
document.addEventListener('DOMContentLoaded', () => {
  // 5초 후에 콘솔에 '안녕하세요' 출력
  setTimeout(()=> {
    console.log('안녕하세요');
  },5000);

  // 사용자가 #button을 클릭할 때 콘솔에 '클릭' 출력
  const button = document.querySelector('button');
  button.addEventListener('click', () =>{
    console.log('클릭');
  },false)
},false)
```

2. 자바스크립트의 동작원리

- 자바스크립트는 싱글 스레드 언어
- 이벤트 루프와 스택을 통해 스케줄링
- UI업데이트, 사용자 이벤트도 모두 같은 스레드에서 처리한다.

### 이벤트 루프 (Event Loop)

- 자바스크립트의 동시성(concurrency)처리 모델의 기본 원리
- 여러가지 동작을 동시다발적으로 처리하려고 하는 모델
- 코드를 실행하고, 이벤트를 처리하고, 다음에 처리하려고 하는 이벤트를 정하는 것 까지가 이벤트 루프가 기반이 된다.

1. 자바스크립트 엔진(Javascript Engine)

- 메모리 힙(Memory Heap) -> 자바스크립트 코드에서 정의한 여러 객체와 값이 저장된다
  - 어플리케이션에서 메모리 힙은 어플리케이션이 직접 관리하는 영역이다.
  - 상대적으로 엑세스가 느리고 메모리를 직접 가져다 쓰고 관리 해야하는데, 이런 메모리를 관리하는 C와 같은 메모리는 할당한 메모리를 적절하게 해제 해주지 않으면 '메모리 누수'가 일어나게 된다.
  - 최신 자바스크립트와 GO와 같은 최신 언어는 메모리 관리를 자동으로 하는 추세.
- 콜 스택(Call Stack)
  - 함수를 한 번 호출하면, 스택에 프레임으로 쌓이게 된다. 즉 프레임 하나 === 함수 실행 한 번
  - 여기서도 실행 컨텍스트가 만들어진다.
  - 자바스크립트 엔진은 가장 나중에 들어온 스택부터 처리하게 된다.
  - 그리고 함수가 실행을 종료하면 메모리에서 해제된다.
  - 콜스택 영역은 동기적으로 실행이된다. 즉 한 번에 한 번씩 밖에 실행을 할 수 없다는 것이다. 가장 마지막에 있는것만 처리한다.

2. WebAPIs 호출

- 자바스크립트 만으로는 할 수 있는 것이 없으므로 함수에서 API를 호출한다.
- 해당 API에서 콜백함수를 실행할 때가 되면, 이벤트 큐에 Message를 저장한다.

3. 큐(Queue)

- 큐라는 단어에서 알 수 있다 싶이, 이벤트 큐에서는 메세지가 들어오는대로 순서를 실행한다.
- 큐에 메세지가 있는지 없는 지 계속 확인하면서 있으면 처리하고, 결과적으로 콜백함수를 실행해서 다시 콜스텍을 추가한다.
- 주의할 점 : 이벤트 루프는 콜스택이 비어있을 때만 메세지를 처리한다.
