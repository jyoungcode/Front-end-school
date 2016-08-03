###### Repository(repo).
- public 무료 , private 7$/month

###### Issue
- 해당 작업 or 문제를 해결하는 과정 관리 (버그관리시스템)
- 기능 추가 or 수정 시 팀원 토론 해당 issue를 중심으로 이어져간다.

###### Wiki
- 문서를 공동으로 작성 or 변경 기능 ( 개발문서, 매뉴얼 기록 시 사용 )
- Git repo에서 관리 ( 변경 내역 모두 기록 됨 )
- 웹 브라우저 접속 안해도 볼 수 있다.

###### Pull Request
- 다른 사람 repo에 내가 push한 변경사항 or 기능 추가 사항을 넣어 달라고 요청하는 기능
- repo 주인이 요청 받은 사항을 확인 후 결정
- 소스코드 한줄 마다 댓글 작성 기능 ( 소통 )

-
###### VCS
- 소프트웨어에 코드를 추가 OR 변경 과정 모두 기록
- 특정한 시점으로 돌아가거나 파일 복원 가능
- 집중형
- 1. 장점: 서버에 repo를 집중시켜 배치, one 소프트웨어 one repo , 데이터가 중앙 서버에 집중되는 형태, 관리가 단순
- 2. 단점: 서버에 접속할 수 없다면 최신 소스 코드를 받아올 수 없다, 서버가 다운되어도 동일한 상황, 서버가 고장 나서 데이터가 사라지면 최신코드 못받는다. ,추후에 집중형에서 분산형으로 바꾸기 어렵다.
- 그림 2.1
- Q. master 하나만을 이야기 하는 것인가????


- 분산형
- 다른사람 repo를 내 repo로 fork, fork 받은 repo는 편집해도 문제가 없다.(완전히 다른repo 라서)
- 1. 장점: 여러개의 repo(fork)를 가질 수 있다, 서버에 접속하지 않아도 개발 가능
- 2. 단점: 규칙을 정하지 않고 멋대로 개발하면 최신 코드가 어디 있는지 알기 어렵다.
- 그림 2.2

###### 설치
- Mac, linux
- 1. Git이 기본 설치 되어 있다.
- 2. 운영체제에 맞는 패키지를 찾아서 설치

- window
- 1. [윈도우용 GIT](https://git-for-windows.github.io/)
- 2. 환경변수설정 (그림2.4) Gitbash만 사용, Use Git Bash Only

- 개행 코드 설정
- 1. Mac, linux: LF(Line Feed)
- 2. window: CRLF(Carriage Return + Line Feed)를
- 3. window 환경에서 설치 시 'Checkout Windows-style, commit Unix-style line endings' 선택시 개행코드 자동 변경.
- 이렇게 하면 checkout 시점에 CRLF, commit 시점에 LF를 사용해 개행 문자를 처리

###### Gitbash (CLI-Command Line Interface)
- $ git config --global user.name "firstname lastname"
- $ git config --global user.email "your_email@gmail.com"
- 확인방법 : ~/.gitconfig
- 명령어를 쉽게 읽을 수 있도록 : $ git config --global color.ui auto

#### Github 사용
###### SSH
- avatar(profile_img)를 올려서 사람들에게 신뢰성을 주자
- SSH key 설정
- 1. SSH 공개 키로 내가 만든 repo를 접근 가능하다. [help SSH](https://help.github.com/articles/generating-an-ssh-key/)
- 2. 다시 살펴보자

###### 소셜 기능 이용
- Follow : 다른 사람 github 개발과정을 볼 수 있다.
- Watch: newsfeed에 watch 한 repo가 나온다

###### Repository 작성




-
###### SourceTree
- workspace: 히스토리는 내 rocal repo다.
- remotes: origin remote repo
- 도구>옵션>인증,네트워크 : 내 계정 확인
- commit만 하면 local repo (눈에 보이지 않는다)에 올라가 있고 push를 안하면 계속 쌓여 있다.
- master, master 충돌 (오류사진)
- 이미지를 삭제후 같은 파일명 추가해서 덮으면 전 이미지는 local에 쌓인다.
- Reverse : 이미 commit 한 걸 취소 방법 : local master>commit 목록 오른클릭>커밋바꾸기 (다시 되돌릴 수 없다.)
- 한단계씩 돌리는 건 conflict 가 생기기 않아서 하나씩 돌리던지 , 3단계 밑으로 돌리고 싶으면 local에서 지워버리고 다시 파일을 넣어준다- (repo에서 새로 받아서 원래대로 수정한 후에 다시 그 파일을 add하고 commit push 해주자)(3단계 밑으로 가는건 잘못된 방법)
- conflict이 나면 파일을 열어서 원하는 방향으로 수정 저장 후 해결하면 된다.
- Reset : 아예 특정 과거 상태로 돌아가고 싶다면 (잘 쓰지 않는 방법)
- 1. local 상태 창에서 commit > 오른클릭 > 현재 브렌치를 이런 이 커밋으로 초기화
- branch : 다른 가지에서 개발하고 나중에 master로 합병 ( 기능별로 나눠서 각자 branch에서 작업한다. 기능별로 branch, master에서 안씀)
- 1.새 브랜치 체크아웃 : 'branch 만들고 그 branch로 이동하겠다.' 의미 , 폴더명/브랜치명 > 새브런치 생성
- 2.hot_branch에서 파일 추가 후 push > master는 변경 안된다. brance
- merge
- 1.head를 옮겨 서로다른 파일상태를 확인 가능. (head는 우리가 지금 어떤 branch에서 작업하는 가를 뜻함)
- 2.branch에서 추가 된 파일 > master 선택해놓고 > merge 창에서 branch꺼 클릭 > merge

- 다른 사람들 같이 할때 clone 후에 branch 체크아웃 하기 .
- 1. 1번 branch에서 작업 후 master에 올리면 > 2번 branch에서 1번브랜치 걸 pull 받고 push하고 > 다시 master에(1번에서 추가한파일 포함해서) merge 하고 > push 하면 된다.

- conflict 사항 수정하기
