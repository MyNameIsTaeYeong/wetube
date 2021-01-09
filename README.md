# Wetube

Cloning YouTube with VanillaJS and NodeJS

## 정리:

>+ npm init
>+ express 설치
>   >+ 협업시 pakage.json만 건네준 후 npm install을 하면 필요한 것을 다운받을 수 있다.


>+ git init
>+ git ignore
>+ index.js(app.js) 작성
>   >+ request의 끝엔 response가 있어야 한다.

>+ babel 설치 (설치관련 이슈가 있으니 문서 참조)
>   >  + 최신 javascript문법을 예전 표준 javacript로 변환해준다.
>+ nodemon 설치
>   >  + 프로젝트에 필요한 부분은 dependencies에 
>   >  + 프로젝트에 필요하진 않지만, 개발자에게 필요한 설치는 devDependencies에
(-D옵션)

>+ middleware ( middle software )
>   >+ 요청과 응답 사이의 무언가 처리를 위하는 함수. (3번째 'next' parameter를 이용해서 다음으로 넘긴다.)
>   >+ app.use()(전역으로 사용) 또는 중간에 삽입(지역으로 사용)하여 사용
>   >+ 필요한 middle ware 설치
>   >   >+ morgan 설치 (logging을 위한 것)
>   >   >+ helmet 설치 (앱의 보안에 도움이 되는 것)
>   >   >+ cookie-parser ( cookie에 유저정보 저장, session을 다루기 위해 )
>   >   >+ body-parser ( form에서 전송한 정보를 req.body를 통해 접근할 수 있다. )

>+ init.js작성
>+ router작성
>+ MVC pattern
>   >   +   M : data
>   >   +   V : data가 어떻게 보이는지?
>   >   +   C : data를 어떻게 처리하는지?
>+ Pug : express에서 View를 다루는 방식 중 하나
>+ Pug 설치
>+ Pug 설정(app.set("view engine", "pug"))
>+ Pug는 기본설정으로 "프로젝트 루트/views"에서 파일을 찾는다.
>+ Pug 테크닉
>   >   + 쉽게 레이아웃 재사용 가능(extends)
>   >   + 컴포넌트 분리해서 사용가능(include)
>   >   + javascipt 추가시 #{javacript code}
>+ 모든 템플릿 또는 컨트롤러 등에서 사용하도록 전역 변수화 시키는 방법
>   >   + middleware를 이용하여 res.locals에 저장.
>+ 한 템플릿에만 변수 추가하는 방법
>   >   + 템플릿에서 '#{변수명}' 또는 '태그=변수명'(텍스트가 없는 경우)을 쓰고 , render()의 두번째 인자의 객체에 담아서 보낸다.
>+ 컨트롤러에서 req.query에 접근하려면 get방식이어야 한다.
>+  mixin : 반복되는 부분의 코드를 재활용하는 방법. (다른 정보, 같은 구조인 경우 사용)
>+ 
