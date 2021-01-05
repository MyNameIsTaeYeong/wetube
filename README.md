# Wetube

Cloning YouTube with VanillaJS and NodeJS

## 정리:

>+ npm init
>+ express 설치
>   >+ 협업시 pakage.json만 건네준 후 npm install을 하면 필요한 것을 다운받을 수 있다.


>+ git init
>+ git ignore
>+ index.js(init.js) 작성
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
>   >   >+ body-parser ( request object에 접근하기 위한 것. body로부터 )
  

