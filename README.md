# myStudy
a commit per a day.

001_JSClock_200509

-Chrome Extension App Momentum Clone

feature
[Clock]
- 현재 시간을 표시합니다.
- 분이나 초가 1자리라면, 앞에 0을 붙여 강제로 2자리로 표기합니다.
- 매 초 업데이트 하기 위해 setInterval 사용합니다.

[User Name]
- 접속 시, localStorage 에 username 키값 유무에 따라, 사용자의 이름을 노출하거나 이름을 입력받습니다.
- 만일 사용자의 이름이 저장되어 있지 않다면, 새롭게 입력받아 해당 이름을 localStorage에 username이라는 키값으로 저장하고, 
- 다음번 방문시 입력한 이름을 노출합니다.

[To-do List]
- toDo List를 관리합니다.
- 최초 접속시 toDos라는 키값으로 localStorage에 저장된 값이 있으면, 해당 값을 toDoList로 표시합니다.
- toDo List에 입력하면, 해당 텍스트를 배열로 관리하고, 해당 배열을 localStorage에 저장합니다.
- 완료된 리스트는 삭제도 가능합니다.

[Weather / Coordinates]
- 사용자에게 위치정보 사용 동의여부를 묻고, 동의했을 시 JavaScript의 navigator객체에서 현재 위치의 위도와 경도를 알아냅니다.
- 알아낸 경도와 위도를 가지고, www.openweathermap.org 의 api를 사용하여 현재 위치의 이름과 현재 위치의 온도를 불러오고, html에 업데이트합니다.
- 일출, 일몰시간, 불쾌지수, 구름양, 현재날씨 등의 많은 정보를 알고있지만, 페이지에는 현재위치의 이름과 온도만 표기합니다.
- 화씨를 섭씨로 불러오기 위하여 파라미터에 따로 섭씨로 요청하였습니다.
- 페이지 우상단에 현재의 위치명과 온도를 소숫점 1자리까지만 표기합니다.

[Background Image]
- 배경화면같은 경우 www.unsplash.com에서 임의의 그림을 가져오는 api를 사용했습니다.
- 인증을 받지 않은 경우 1시간에 최대 50회 호출만 허용하기 떄문에, 불러오는 시점에서 + 24시간 해준 시간에 파기되는 날짜로 초기화 하였고,
- 그림의 주소, 해당 그림이 촬영된 장소명, 파기되는 날짜를 localStorage에 저장합니다.
- 재 접속 시, localStorage에 저장된 파기날짜가 현재 시간보다 과거이거나 localStorage에 키값이 없다면 새롭게 api를 호출합니다.
- 페이지 좌 하단에는 사진의 장소명을 표시합니다.

위 프로젝트의 접속 주소는 https://madhandz5.github.io/myStudy/001_JSClock_200509 입니다.
