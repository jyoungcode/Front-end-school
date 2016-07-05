position

static - 기본값으로 위치정보를 임의로 설정 해줄 수 없다.
absolute - 절대위치로, 문서 최 좌측상단을 기준으로 위치정보를 설정하며 스크롤시 이동한다.
- absolute는 부모요소에 상대적. 대신 부모가 자격이 있어야한다. (감쌌다고 다 부모가 아니다.) -> 즉 부모에서 position static만 아니면 나머지 속성을 가지면 부모다.
- 기준은 가까운 부모 ( jquery closest, oppset parent란 용어를 쓴다. )
absolute는 normal flow를 깬다.

relative - 상대위치로, static 위치 사용시 있던 위치를 기준으로 이동한다.
- 원래 좌측 상단 기준인데, relative를 쓰면 그 relative 속성이 있는 위치가 기점

fixed - 위치 고정으로, 스크롤과 상관없이 항상 문서 최 좌측상단을 기준으로 좌표가 설정되어있다.
inherit  - 부모 태그의 속성값을 상속받게 된다.

top left bottom right
float 처럼 뜨지만 영향을 주지 않는다.

position 층 위치 우선순위 z-index로 잡을 수 있다.
(10단위, 100단위 - 후에 수정 시 고려)

position 을 absolute 나 fixed로 설정시 가로 크기가 100%가 되는 block 태그의 특징이 사라지며 inline-box 처럼 크기에 맞게 딱 붙게 된다.
