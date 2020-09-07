# personalProjects
목표:
project들을 관리하고, daily 미션들을 관리하는 페이지 제작

페이지레이아웃 (총 4개 html 파일)
```
    0. main.html
        - 메인 데드라인 설정
        - 'Set Your Main Deadline...'
        - 화면 중앙에 달력이 있고, 날짜를 선택하여 submit하면 project.html 페이지로 이동
        - 화면 상단 좌측 navi :
            - 'd'버튼 클릭시, main.html 페이지로 이동.
            - 'p'버튼은 selected 되어 있는 상태.
            - 't'버튼 클릭시, todo.html 페이지로 이동.
            - 'c'버튼 클릭시, chart.html 페이지로 이동.
        requirements:
            - 배경 이미지 랜덤 선택 및 띄우기
            - submit버튼에 (eL) 적용
            - 달력 띄우기

    1. project.html
        - setting Projects
        - 'Make Your Projects List...'
        - 화면 상단 중앙: 'D-000'
        - 화면 중앙: 'Make your projects'
        - 화면 상단 좌측 navi : 'd', 'p', 't', 'c' <a href=".html">
        - 화면 하단 중앙 flex : column
            1. Project List에 저장된 project 리스트가 배열됨.
            2. 화면 하단 중앙2: Project List에서 완수한 project들이 배열됨.

        requirements:
            - 화면 상단 중앙: setting해둔 deadline까지의 d-day를 표출 
                - LocalStorage에서 정보(마감기한) 추출 후 js로 계산하여 d-day 도출

            - 화면 상단 좌측 navi : 'd', 'p', 't', 'c'
                - 'd'버튼 클릭시, main.html 페이지로 이동.
                - 'p'버튼은 selected 되어 있는 상태.
                - 't'버튼 클릭시, todo.html 페이지로 이동.
                - 'c'버튼 클릭시, chart.html 페이지로 이동.

            - 화면 상단 좌측: 'todo' 버튼의 경우 초기에는 hidden.
                - Projects Llist에 li가 한 개 이상 생성될 경우 visible.

            - 화면 중앙: Project 에 대한 상세내용 입력창 
                세 가지의 input box & submit 버튼 필요
                - project name
                - project color
                    - color picker 기능을 구현할 수 있는가?
                - estimateTime할당될 시간 선택
                    - daily/weekly를 선택 가능.
                    - daily: 일별 달성해야 할 시간 설정
                    - weekly: 주차별 달성해야 할 시간 설정
                - submit버튼 hidden
                    - 세가지 inbox 모두 채워넣었을 시 visible.
                    - estimateTime에 입력된 dataType이 number가 아니라면 alret 창 표출
                        -js 에서 handler로 제어 


            - 화면 하단 중앙: Pending Projects List
                - 정상적으로 submit된 project의 이름,색깔,할당시간 표출(with d || w)
                - done버튼 클릭 시, done list로 이동
                - cancel버튼 클릭시, 리스트에서 삭제
            

            - 화면 하단 중앙2: Done Projects List 
                visibility:
                    - 초기값은 hidden
                    - list에 li가 한 개 이상 추가되었을 경우, visible.
                    - 모든 li가 사라지면 다시 hidden.
                - Pending Projects List에서 done버튼 클릭된 project.이름만 표출
                - undone버튼 클릭 시, Pending Projects List로 이동

    2. todo.html
        - 상단에는 project.html과 chart.html로 이동하는 버튼이 양 극단에 위치
        - 화면 메인에는 목표기한(default setting?)
    
    3. chart.html (weekly / monthly / quarter)

```
eL : eventListener('click',handlerFunction);