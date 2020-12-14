# CSS의 변화

1. CSS3는 없다.

- 각 기능별 모듈만 존재

2. CSS 명세가 방배해졌다.

- 2020.09 현재, 전체 CSS 프로퍼티 533개
- Chrome Plaform Status에서 가장 많이 사용된 프로퍼티 목룍을 볼 수 있다.

## 레이아웃

1. CSS Box Model

- CSS 레이아웃의 기본이 되는 원리
- 엘리먼트의 크기를 정하는 표준
- bo-sizing속성으로 크기 계산 방식 변경 가능

## 논리적 프로퍼티와 값(Logical Properties and Values)

1. CSS Logical Properties and Values Module

- 물리적인 프로퍼티나 값이 아닌 논리적인 프로퍼티와 값으로 레이아웃을 다룰 수 있게 하는 표중
- 다국어를 지원하는 경우가 많아지면서 단순히 margin-left와 같은 글쓰기가 아니라 왼쪽/오른쪽/세로쓰기 등 다양한 다국어 지원이 필요해졌다
- 그에 따라 논리적인 프로퍼티 값으로 레이아웃을 다룰 수 있는 표준이 생겨났다

2. inline과 block : 왼/오/세로 쓰기 방식에 따라 유동적으로 달라진다

- inline : 텍스트 쓰기 방향
- block : 텍스트 쓰기 방향의 수직

3. 용어의 변화

- size: width나 height 대신 사용
- start: 텍스트 흐름의 시작 위치
- end: 텍스트 흐름의 끝 위치

4. ex

- border -> border-block
- border-top-width -> border-block-start-width
- margin -> margin-block
- margin-left -> margin-inline-start
- margin-right -> margin-inline-end
- margin-top -> margin-block-start
- margin-bottom -> margin-block-end
- padding -> padding-block

## CSS property

- order: 숫자(음수 허용)
  - flex 속성으로 메인 콘텐츠를 header 나 footer보다 앞에 위치시킬 수 있다
