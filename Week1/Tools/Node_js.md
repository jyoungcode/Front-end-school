### Node.js 설치

- [nodejs.org](http://nodejs.org/)
- [npmjs.com](https://www.npmjs.com/) : Node Package Manager

`Node.js`를 설치한 후에 설치된 버전 확인 명령어

```sh
$ node --version # v4.2.4
$ npm --version # 2.14.12
```

-
> ※  윈도우(cmd or git bash) , Mac(Terminal)에서 위의 명령어를 사용한다.

### http-server 모듈 설치/활용

**http-server** 모듈 전역 설치

```sh
# MacOS 사용자는 명령어 앞에 sudo 라고 붙인 후에 설치 실행
$ npm install --global http-server
```

**http-server** 모듈 실행 명령어

```sh
# -o 는 옵션. 기본 웹브라우저 열기(Open)
$ http-server -o
```
> ※ 반드시 해당 `.html`파일이 있는 Directory에서 진행해야 한다. 명령어 `cd ` ( change directory )

> ※ **http-server** 모듈 종료 시에는 `Ctrl+C`를 누름.

