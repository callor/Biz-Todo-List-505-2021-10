# todoList에 login 부착하기

- todoList를 실행하면 로그인이 되었나 확인하고
- login이 되었으면 todoList 화면을 보여주고
- login이 되어있지 않으면 login화면으로 redirect하여 로그인을 수행하도록 한다

## 두개의 화면을 조건에 따라 달리 보여주기

- react-router-dom을 사용하여 화면을 달리 보여주기 실행
- react-router-dom을 사용하지 않고도 구현할수 있겠지만, redirect등의 수행을 하기에는 react-router-dom을 사용하는 것이 다소 편리하다

* yarn add react-router-dom

## 로그인을 수행한 후 로그인정보(user)을 유지하기 위하여

- User 정보를 관리할 Context를 생성

## git page에 deploy 하기

- git-hub를 사용하여 react 프로젝트를 공개하기
- git page 는 static 방식의 web hosting

1. git repository 만들기 : todo_list
2. local project를 respository로 설정하기 : git init
3. local project push 준비 : git add .
4. local project commit 하기 : git commit -m first
5. 원격, local repository 연결하기 : git remote add ....

# 합성이란 무엇인가

- 일반적인 프로그래밍은 한개의 모듈을 만들고 하위의 여러 모듈에서 가져다 사용하는 개념이 보통이다.
- 합성은 모듈을 어디에서나 자유롭게 가져다 부담없이 붙여쓰자는 개념
- 객체지향의 상속의 단점을 보완하는 디자인 패턴으로 많은 연구가 이루어지고 있다
- React는 children 이라는 속이 기본적으로 포함이 되어 있어서 쉽게 합성패턴을 이용한 프로젝트 구현이 가능하다

## 합성패턴

- 하위의 모듈을 상위에서 끌어올려 완전하게 재사용하는 개념
- 객체지향의 상속도 재상의 개념으로 탄생을 했으나, 상속되는 클래스와 상속받는 클래스간에 결합도가 증가하고 응집도는 낮아지는 매우 불편한 상황이 연속된다
- 합생패턴은 끌러올리는 하위의 모듈이 완전하게 기능을 변경하지 않는 이상 사용하는 곳에서 프로젝트의 Fail이 나는 경우는 거의 없다라고 봐도 된다
