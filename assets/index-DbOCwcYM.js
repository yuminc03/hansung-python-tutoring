import{j as n,M as j,S as k,L as y,u as C,r as m,a as T,X as S,C as I,b as P,d as E,e as B,H as O,f as A,i as w,k as M}from"./vendor-react-DYGOEpsD.js";import{h as V,i as L}from"./vendor-BkVfiPkM.js";import{h as H,v as D}from"./vendor-syntax-gpj2hg0e.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const N=[{week:1,title:"파이썬 입문과 개발환경 구축",summary:"파이썬 첫걸음, VS Code 설치 및 알고리즘 기초 이해"},{week:2,title:"변수와 자료형 이해",summary:"데이터 변수 사용법, 기본 자료형 학습 및 입출력 프로그램 작성"},{week:3,title:"연산자와 조건문",summary:"연산자, 조건식, operator 모듈 학습 및 조건문 실습"},{week:4,title:"반복문과 알고리즘 구현",summary:"반복문, 무한루프, 중첩 반복문 학습 및 문제 해결 실습"},{week:5,title:"리스트와 데이터 활용",summary:"리스트 개념 학습 및 간단한 데이터 처리 프로그램 구현"},{week:6,title:"웹페이지 완성 및 발표",summary:"최종 구현물 점검, 오류 수정 및 결과 발표"}],v="/hansung-python-tutoring/assets/canola_python-CWcmJYTu.svg",K="data:image/svg+xml,%3csvg%20role='img'%20viewBox='0%200%2024%2024'%20xmlns='http://www.w3.org/2000/svg'%3e%3ctitle%3eGitHub%3c/title%3e%3cpath%20d='M12%20.297c-6.63%200-12%205.373-12%2012%200%205.303%203.438%209.8%208.205%2011.385.6.113.82-.258.82-.577%200-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422%2018.07%203.633%2017.7%203.633%2017.7c-1.087-.744.084-.729.084-.729%201.205.084%201.838%201.236%201.838%201.236%201.07%201.835%202.809%201.305%203.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93%200-1.31.465-2.38%201.235-3.22-.135-.303-.54-1.523.105-3.176%200%200%201.005-.322%203.3%201.23.96-.267%201.98-.399%203-.405%201.02.006%202.04.138%203%20.405%202.28-1.552%203.285-1.23%203.285-1.23.645%201.653.24%202.873.12%203.176.765.84%201.23%201.91%201.23%203.22%200%204.61-2.805%205.625-5.475%205.92.42.36.81%201.096.81%202.22%200%201.606-.015%202.896-.015%203.286%200%20.315.21.69.825.57C20.565%2022.092%2024%2017.592%2024%2012.297c0-6.627-5.373-12-12-12'/%3e%3c/svg%3e",W="/hansung-python-tutoring/assets/tutee-Dg9WVyx2.png",X="/hansung-python-tutoring/assets/tutor-D6NB7pyJ.png";function z({theme:e,toggleTheme:l}){return n.jsxs("div",{className:"container",children:[n.jsxs("header",{className:"hero",children:[n.jsxs("div",{className:"home-header-row",children:[n.jsx("div",{className:"hero-logo-container",children:n.jsx("img",{src:v,alt:"Canola Python Logo",className:"hero-logo"})}),n.jsx("button",{className:"theme-toggle-btn",onClick:l,"aria-label":"Toggle Theme",children:e==="light"?n.jsx(j,{size:20}):n.jsx(k,{size:20})})]}),n.jsx("h1",{className:"hero-title",children:"Canola Python"}),n.jsxs("p",{className:"hero-subtitle",children:["2026학년도 1학기 미래플러스대학 한성 AX 융합 튜터링",n.jsx("br",{}),"'파이썬 프로그래밍' 과목의 6주간 학습 및 멘토링 과정을 기록하는 아카이브입니다."]})]}),n.jsx("main",{className:"grid-container",children:N.map(o=>n.jsxs("div",{className:"card",children:[n.jsxs("span",{className:"card-week",children:["WEEK ",o.week]}),n.jsx("h2",{className:"card-title",children:o.title}),n.jsx("p",{className:"card-summary",children:o.summary}),n.jsx("div",{className:"card-footer",children:n.jsx(y,{to:`/note/${o.week}`,className:"card-link",children:"View notes →"})})]},o.week))}),n.jsx("section",{className:"creator-section",children:n.jsxs("div",{className:"creator-card",children:[n.jsxs("div",{className:"creator-avatars",children:[n.jsx("img",{src:W,alt:"Tutee",className:"creator-avatar"}),n.jsx("img",{src:X,alt:"Tutor Lia",className:"creator-avatar"})]}),n.jsxs("div",{className:"creator-info",children:[n.jsx("span",{className:"creator-title-label",children:"ABOUT THE CREATOR"}),n.jsx("h2",{className:"creator-name",children:"Lia"}),n.jsxs("p",{className:"creator-description",children:["6주간의 파이썬 여정을 기록하는 튜터, AI.소프트웨어학과 25학번 리아입니다.",n.jsx("br",{}),"유채꽃 가득한 봄날처럼, 쉽고 재미있게 파이썬 프로그래밍을 학습할 수 있도록 돕습니다."]})]})]})}),n.jsx("footer",{className:"footer",children:n.jsxs("div",{className:"footer-content",children:[n.jsx("p",{className:"footer-info",children:"© 2026 Canola Python. All rights reserved. Created by Lia"}),n.jsx("a",{href:"https://github.com/yuminc03/hansung-python-tutoring",target:"_blank",rel:"noopener noreferrer",className:"footer-link",title:"GitHub Repository",children:n.jsx("img",{src:K,alt:"GitHub Logo",className:"footer-github-icon"})})]})})]})}const J=`# 📝 [1주차] 파이썬 입문 및 개발 환경 구축

파이썬(Python)은 간결하고 읽기 쉬운 문법을 바탕으로 데이터 분석, 인공지능, 웹 개발 등 다양한 분야에서 활용되는 강력한 프로그래밍 언어입니다. 1주차에는 파이썬의 기본 개념을 가볍게 이해하고, 내 컴퓨터에서 직접 코드를 작성하고 실행할 수 있는 '개발 환경'을 완벽하게 세팅하는 것을 목표로 합니다.

## 1. 파이썬 첫걸음: 왜 파이썬인가요?

- **문법 구조가 쉽다:** 복잡한 기호보다 직관적인 영단어 위주로 구성되어 있어, 처음 프로그래밍을 접하는 사람도 코드의 흐름을 쉽게 읽을 수 있습니다.
- **다양한 라이브러리가 존재한다:** 전 세계의 수많은 개발자들이 만들어 놓은 유용한 도구(라이브러리)들을 블록 조립하듯 쉽게 가져다 쓸 수 있습니다.

## 2. 개발 환경 구축 (Python & VSCode)

코딩을 시작하기 위해서는 파이썬 번역기(Python)와 코드를 작성할 쾌적한 노트(VSCode)가 필요합니다. 다음 순서대로 설치를 진행해 보세요.

### 🔹 Step 1: 파이썬(Python) 설치

1. [파이썬 공식 홈페이지(python.org)](https://www.python.org/)에 접속합니다.
2. \`Downloads\` 메뉴에서 자신의 운영체제(Windows 또는 macOS)에 맞는 최신 버전을 다운로드합니다.
3. **[주의]** 설치 파일을 실행한 후, 첫 화면 하단의 **\`Add Python to PATH\`** 옵션을 반드시 체크한 후 \`Install Now\`를 클릭합니다. (이 과정을 누락하면 컴퓨터가 파이썬의 위치를 찾지 못해 오류가 발생할 수 있습니다.)

### 🔹 Step 2: VSCode(Visual Studio Code) 설치

1. [VSCode 공식 홈페이지(code.visualstudio.com)](https://code.visualstudio.com/)에서 설치 파일을 다운로드하고 실행하여 설치를 완료합니다.
2. VSCode는 전 세계에서 가장 많이 사용되는 코드 편집기로, 다양한 확장 프로그램을 통해 개인에게 최적화된 작업 환경을 만들 수 있습니다.

### 🔹 Step 3: VSCode 파이썬 확장 프로그램 설치

1. VSCode를 실행하고 좌측 메뉴의 블록 모양 아이콘(\`Extensions\`, 단축키 \`Ctrl+Shift+X\` / \`Cmd+Shift+X\`)을 클릭합니다.
2. 검색창에 \`Python\`을 검색하고, Microsoft에서 제공하는 확장 프로그램을 설치합니다. 이 확장을 통해 코드 자동 완성, 문법 오류 강조 등 편리한 기능을 사용할 수 있습니다.

---

## 3. 나의 첫 번째 파이썬 코드 실행하기

모든 준비가 끝났습니다! 컴퓨터에게 첫 번째 명령을 내려봅시다.

1. VSCode에서 새로운 폴더를 열고, \`hello.py\`라는 이름의 새 파일을 생성합니다.
2. 아래의 코드를 파일에 입력합니다.

\`\`\`python
# 화면에 텍스트를 출력하는 print() 함수를 사용해 봅니다.
print("Hello, Python!")
print("파이썬의 세계에 오신 것을 환영합니다.")

# 변수를 활용한 간단한 응용
my_name = "튜티"
print(my_name, "님, 1주차 학습을 축하합니다!")
\`\`\`

1. 우측 상단의 ▷ (재생 버튼)을 클릭하거나, 하단 터미널(Terminal) 창에 \`python hello.py\`를 입력하여 코드를 실행합니다.
2. 터미널 창에 입력한 문장이 성공적으로 출력되는지 확인합니다.

---`,R=`# 📝 [2주차] 변수와 자료형 이해

이번 주차에서는 프로그램이 데이터를 어떻게 기억하고 다루는지 학습합니다. 데이터를 담는 그릇인 '변수'의 개념을 익히고, 파이썬에서 다루는 데이터의 종류(자료형), 그리고 사용자와 상호작용하는 기본 입력과 출력 방법을 알아봅니다.

## 1. 데이터 변수와 사용법 (Variables)

변수는 데이터를 담아두는 '이름표가 붙은 상자'와 같습니다. 상자에 이름을 붙여두고, 필요할 때마다 그 안에 든 데이터를 꺼내 쓰거나 새로운 데이터를 넣어 내용을 바꿀 수 있습니다.

- **변수 만들기:** 파이썬에서는 \`변수이름 = 값\` 형태로 변수를 만듭니다.
- 여기서 \`=\` 기호는 '같다'는 뜻이 아니라, 오른쪽에 있는 값을 왼쪽 변수에 '넣는다(대입한다)'는 의미입니다.

\`\`\`python
# 변수 선언 및 데이터 할당
student_name = "김튜티"
student_age = 20

# 변수 사용 (저장된 데이터 출력)
print(student_name)
print(student_age)

# 변수 값 변경하기 (상자 안의 내용물 바꾸기)
student_age = 21
print("변경된 나이:", student_age)
\`\`\`

## 2. 기본 자료형 학습 (Data Types)

상자(변수)에 담을 수 있는 내용물의 종류를 '자료형'이라고 합니다. 데이터의 성격에 따라 컴퓨터가 처리하는 방식이 다르기 때문에 기본 자료형을 구분하는 것은 매우 중요합니다.

- **정수형 (\`int\`):** 소수점이 없는 숫자 (예: \`10\`, \`5\`, \`0\`)
- **실수형 (\`float\`):** 소수점이 있는 숫자 (예: \`3.14\`, \`1.5\`)
- **문자열 (\`str\`):** 텍스트 데이터. 단어나 문장을 따옴표(\`'\` 또는 \`"\`)로 감싸서 표현 (예: \`"Hello"\`, \`'파이썬'\`)
- **논리형 (\`bool\`):** 참과 거짓을 나타내는 데이터. (예: \`True\`, \`False\`. 반드시 첫 글자는 대문자로 작성해야 합니다.)

\`\`\`python
# 다양한 자료형 변수 선언
level = 1          # 정수(int)
score = 95.5       # 실수(float)
subject = "Python" # 문자열(str)
is_passed = True   # 논리(bool)

# type() 함수를 사용하면 해당 변수에 담긴 데이터의 종류를 확인할 수 있습니다.
print(type(level))   # <class 'int'> 출력
print(type(score)) # <class 'float'> 출력
print(type(subject)) # <class 'str'> 출력
print(type(is_passed)) # <class 'bool'> 출력
\`\`\`

## 3. 간단한 입력·출력 프로그램 작성

지금까지는 개발자가 코드에 직접 데이터를 적었지만, \`input()\` 함수를 사용하면 프로그램을 실행하는 사용자로부터 직접 데이터를 입력받을 수 있습니다.

- **\`input("질문할 내용")\`**: 사용자의 입력을 기다립니다. **주의할 점은 사용자가 숫자를 입력하더라도, \`input()\`은 모든 입력을 '문자열(str)' 형태로 받아들입니다.**
- **형변환 (Type Casting)**: 입력받은 숫자를 가지고 덧셈, 뺄셈 같은 수학 계산을 하려면 문자를 숫자로 형태를 바꿔주어야 합니다. 이때 \`int()\`나 \`float()\` 함수를 사용합니다.

### 💻 [예시 코드] 나이 계산기 프로그램 만들기

사용자에게 이름과 태어난 연도를 입력받아, 현재 나이를 계산하고 인사하는 간단한 프로그램을 작성해 봅니다.

\`\`\`python
# 1. 사용자에게 데이터 입력 받기
user_name = input("이름을 입력하세요: ")
birth_year = input("태어난 연도를 입력하세요 (예: 2003): ")

# 2. 데이터 처리 및 계산
# input()으로 받은 '문자열' 연도를 '정수'로 변환(int)하여 나이를 계산합니다.
current_year = 2026
age = current_year - int(birth_year)

# 3. 결과 출력 (문자열 덧셈 연산과 print의 콤마 활용)
print("\\n--- 결과 ---")
print("안녕하세요, " + user_name + "님!")
print("당신의 올해 나이는 ", age, "세입니다.", sep='', end=' ')
print('프로그램 끝.')
\`\`\`

### print에 들어갈 수 있는 파라미터

> 💡 **\`sep\` (Separator, 구분자)**

\`print()\` 함수에서 콤마(\`,\`)로 구분된 인자들 사이에 특정 문자열을 삽입

**기본값**: 공백 하나 (\`' '\`)

**활용**: \`print('2026', '05', '06', sep='-')\` → \`2026-05-06\`

**줄바꿈**: \`print('1', '2', '3', sep='\\n')\` → 1, 2, 3이 각각 줄바꿈되어 출력


> 💡 **\`end\` (끝)**

\`print()\` 문이 모든 내용을 출력한 후 맨 마지막에 출력할 내용을 설정

**기본값**: 줄바꿈 문자 (\`'\\n'\`)

**활용**: \`print()\` 문이 끝난 후 줄을 바꾸지 않고 이어서 출력할 때 사용

**공백 유지**: \`print('Hello', end=' ')\` → \`print('World')\` → \`Hello World\`

---`,F=`# 📝 [3주차] 연산자와 조건문: 프로그램에 논리 더하기

이번 주차에서는 프로그램이 상황에 따라 다르게 행동하도록 만드는 '흐름 제어'의 기초를 배웁니다. 데이터를 계산하고 비교하는 **연산자**와, 특정 조건에서만 코드가 실행되도록 하는 **조건문**을 학습하여 단순한 계산기를 넘어선 진짜 '프로그램'을 만들어 봅니다.

[Google Colab](https://colab.research.google.com/drive/1QepOAKE7YYGcn8iq9ahQaJU_OdsOJqVh?usp=sharing)

---

## 1. 연산자와 조건식, 그리고 \`operator\` 모듈

프로그램은 끊임없이 데이터를 계산하고 비교합니다. 이때 사용하는 기호들을 연산자라고 합니다.

### 🔹 자주 쓰이는 기본 연산자

- **산술 연산자:** \`+\` (더하기), \`-\` (빼기), \`*\` (곱하기), \`/\` (나누기), \`//\` (몫), \`%\` (나머지)
- **비교 연산자:** 두 값을 비교하여 \`True\` 또는 \`False\`를 반환합니다.
    - \`==\` (같다), \`!=\` (다르다)
    - \`>\`, \`<\`, \`>=\`, \`<=\` (크다, 작다 등)
- **논리 연산자:** 여러 조건을 조합할 때 사용합니다.
    - \`and\` (둘 다 참일 때 참), \`or\` (둘 중 하나만 참이어도 참), \`not\` (참/거짓 뒤집기)

### 🔹 \`operator\` 모듈 활용하기

파이썬에는 기본적인 기호 외에도 연산을 함수 형태로 제공하는 내장 모듈인 \`operator\`가 있습니다. 나중에 데이터를 정렬하거나 복잡한 함수형 프로그래밍을 할 때 매우 유용하게 쓰입니다.

\`\`\`python
import operator

a = 10
b = 3

# 기호를 사용한 연산
print(a + b) # 13
print(a > b) # True

# operator 모듈을 사용한 연산 (결과는 위와 동일합니다)
print(operator.add(a, b)) # +, 13 (더하기 함수)
print(operator.gt(a, b))  # >, True (greater than, 크다 함수)
\`\`\`

## 2. 조건문과 중첩 조건문 실습

조건문은 "만약 ~라면, ~를 해라"라는 논리를 코드에 부여합니다.

### 🔹 \`if\`, \`elif\`, \`else\` 구조

- \`if\`: 가장 처음 조건을 검사합니다.
- \`elif\` (else if): 앞의 조건이 거짓일 때, 다른 조건을 검사합니다. (여러 번 사용 가능)
- \`else\`: 위의 모든 조건이 거짓일 때 실행됩니다. (조건식을 적지 않습니다)

\`\`\`python
score = 85

if score >= 90:
    print("A학점 입니다.")
elif score >= 80:
    print("B학점 입니다.")
else:
    print("노력이 필요합니다.")
\`\`\`

### 🔹 중첩 조건문 (조건문 안의 조건문)

상황이 복잡할 때는 \`if\`문 안에 또 다른 \`if\`문을 넣을 수 있습니다. 이때 들여쓰기(Indentation)가 매우 중요해집니다.

\`\`\`python
is_logged_in = True
user_role = "admin"

if is_logged_in:
    print("로그인 되었습니다.")
    # 중첩 조건문: 로그인 된 상태에서 권한을 한 번 더 확인합니다.
    if user_role == "admin":
        print("관리자 페이지에 접근할 수 있습니다.")
    else:
        print("일반 사용자 페이지로 이동합니다.")
else:
    print("로그인이 필요합니다.")
\`\`\`

---`,G=`# 📝 [4주차] 반복문과 알고리즘 구현: 코드의 반복 줄이기

이번 주차에서는 똑같은 작업을 수십, 수백 번 자동으로 처리하게 해주는 **반복문**을 배웁니다. 조건문과 반복문을 결합하여 무한 루프를 제어하고, 중첩된 반복문으로 복잡한 형태의 알고리즘을 설계하는 방법을 익힙니다.

[Google Colab](https://colab.research.google.com/drive/1fu0HBQ8PFtZqC6IOSR75QSTztRPlE49d?usp=sharing)

---

## 1. 반복문 기초 (for와 while)

프로그램을 만들다 보면 동일한 코드를 여러 번 실행해야 할 때가 있습니다. 이때 반복문을 사용하면 코드를 획기적으로 줄일 수 있습니다. 이번 학습에서는 데이터 묶음 대신, 지정된 횟수나 조건에 따라 반복하는 방법에 집중합니다.

### 🔹 횟수가 정해진 반복: \`for\`와 \`range()\`

특정 횟수만큼 반복할 때는 \`for\`문과 숫자의 범위를 만들어주는 \`range()\` 함수를 함께 사용합니다.

\`\`\`python
# range(5)는 0부터 4까지 총 5번 반복을 만들어냅니다.
for i in range(5):
    print("이 문장은 5번 출력됩니다.", i)

# 1부터 10까지 출력하기
for num in range(1, 11):
    print(num)
\`\`\`

### 🔹 조건에 따른 반복: \`while\`

\`while\`문은 조건식이 \`True\`(참)인 동안에는 코드를 끊임없이 반복합니다. 조건이 \`False\`(거짓)가 되는 순간 반복이 종료됩니다.

\`\`\`python
count = 5

while count > 0:
    print("카운트다운:", count)
    count = count - 1  # 이 코드가 없으면 무한히 반복됩니다!

print("발사!")
\`\`\`

## 2. 무한 루프와 흐름 제어 (break, continue)

의도적으로 프로그램이 종료되지 않고 계속 대기하도록 만들 때 무한 루프(Infinite Loop)를 사용합니다. 이때 루프를 빠져나가거나 흐름을 건너뛰는 제어문이 반드시 필요합니다.

- \`while True:\` : 조건이 항상 참이므로 무한히 반복됩니다.
- \`break\`: 반복문을 즉시 완전히 빠져나갑니다.
- \`continue\`: 이번 반복의 남은 코드를 무시하고, 다음 반복의 처음으로 되돌아갑니다.

\`\`\`python
while True:
    answer = input("종료하려면 'q'를 입력하세요: ")

    if answer == 'q':
        print("프로그램을 종료합니다.")
        break  # 'q'가 입력되면 무한 루프를 탈출합니다.
    else:
        print("입력한 값:", answer)
        continue # 아래 코드를 무시하고 다시 위로 올라가 입력을 받습니다.
\`\`\`

## 3. 중첩 반복문 (Nested Loops)

중첩 반복문은 반복문 안에 또 다른 반복문이 들어있는 형태입니다. 시계의 시침(바깥 루프)과 분침(안쪽 루프)의 관계를 생각하면 이해하기 쉽습니다. 바깥쪽 반복문이 한 번 실행될 때마다, 안쪽 반복문은 자신의 전체 횟수만큼 실행됩니다.

\`\`\`python
# 2단부터 9단까지 구구단 출력하기
for i in range(2, 10):      # 바깥 루프: 단수 (2~9)
    print("---", i, "단 ---")
    for j in range(1, 10):  # 안쪽 루프: 곱해지는 수 (1~9)
        # 안쪽 루프가 9번 도는 동안 바깥 루프의 i값은 고정됩니다.
        print(i, "X", j, "=", i * j)
\`\`\`

## 4. 🎯 [주간 실습] 문제 해결 중심 알고리즘: Up & Down 숫자 맞추기

지금까지 배운 무한 루프 (\`while True\`), \`break\`, 그리고 저번 주에 배운 \`if\` 조건문을 결합하여 고전적인 숫자 맞추기 알고리즘을 직접 구현해 봅니다.

### 📝 실습 목표

- 컴퓨터가 1부터 50 사이의 임의의 숫자를 정합니다.
- 사용자가 숫자를 입력하면, 컴퓨터가 정답과 비교하여 "Up" 또는 "Down"을 힌트로 줍니다.
- 정답을 맞히면 몇 번 만에 맞혔는지 출력하고 무한 루프를 탈출합니다.

### ✅ 구현 코드

\`\`\`python
import random

# 1. 정답 숫자 생성 및 시도 횟수 초기화
secret_number = random.randint(1, 50)
attempts = 0

print("🎲 Up & Down 숫자 맞추기 게임 (1~50)")

# 2. 무한 루프를 활용한 게임 로직
while True:
    # 사용자 입력 및 시도 횟수 증가
    guess = int(input("숫자를 예상해 보세요: "))
    attempts += 1

    # 3. 조건문을 통한 결과 판별 및 탈출
    if guess == secret_number:
        print("🎉 정답입니다! 총", attempts, "번 만에 맞히셨습니다.")
        break  # 정답을 맞히면 반복문 탈출
    elif guess < secret_number:
        print("🔼 Up!")
    else:
        print("🔽 Down!")
\`\`\`

# 오늘의 알고리즘 문제

## 주어진 문자열을 1과 0으로 바꾸고 아스키 코드표 안에 문자로 바꾸기

문제 출처: https://pyalgo.co.kr/

### **제한 사항**

- 65 ≤ 문자열을 10진수로 변경한 숫자 ≤ 122
- 문자열은 \`+\`, \`-\`, \`공백\` 외에는 주어지지 않습니다.
- 각각의 문자열은 1차원 리스트로 주어집니다.
- 공백은 주어질 수도 있고, 주어지지 않을 수도 있습니다.

---

### **입출력 예**

| **입력** | **출력** |
| --- | --- |
| [' + - - + - + - ', ' + + + - + - + ', ' + + - + + + - '] | 'Jun' |
| [' + + + - - + + ', ' + + + - + - - ', '++----+', '+++ --+ -', '+++-+ - -'] | 'start' |
| [' + + - - - - + ', ' + + - + + - - ', '+ +-- +++ ', ' ++- ++++'] | 'algo' |

---

### **입출력 설명**

\`+\`는 \`1\`로, \`-\`는 \`0\`으로 변경되어 ' + - - + - + - '는 1001010이 됩니다. 이 숫자는 10진수로 바꾸었을 때 74로 아스키 코드표로 보면 대문자 J가 됩니다. 이와 같은 원리로 나머지 2개를 문자로 바꿔 조합하면 'Jun'이 됩니다.

\`\`\`python
def credentials(data):
  result = ''
  for i in data:
    result += chr(int(i.replace(" ", "").replace("+", "1").replace("-", "0"), 2))
  return result

print(credentials([' + - - + - + - ', ' + + + - + - + ', ' + + - + + + - '])) # Jun
print(credentials([' + + + - - + + ', ' + + + - + - - ', '++----+', '+++ --+ -', '+++-+ - -'])) # start
print(credentials([' + + - - - - + ', ' + + - + + - - ', '+ +-- +++ ', ' ++- ++++'])) # algo
\`\`\`

## 설명

| **단계** | **코드** | **설명** |
| --- | --- | --- |
| 1 | \`result = ''\` | 결과를 담을 빈 문자열 |
| 2 | \`for i in data:\` | 리스트의 각 암호 문자열 \`i\`를 순회 |
| 3 | \`i.replace(" ", "")\` | 공백 제거 (\`' + - - '\` → \`'+-+--'\`) |
| 4 | \`.replace("+", "1")\` | \`+\`를 이진수 \`1\`로 |
| 5 | \`.replace("-", "0")\` | \`-\`를 이진수 \`0\`으로 |
| 6 | \`int(..., 2)\` | 2진수 문자열을 정수로 (예: \`"1001010"\` → \`74\`) |
| 7 | \`chr(...)\` | 정수를 ASCII 문자로 (예: \`74\` → \`'J'\`) |
| 8 | \`result += ...\` | 그 글자를 \`result\` 뒤에 추가 |
| 9 | \`return result\` | 완성된 단어 반환 |
`,U=`# 📝 [5주차] 리스트와 데이터 활용: 대량의 데이터 다루기

[Google Colab](https://colab.research.google.com/drive/1I90F0XZ9qhGCtYpvUNZnWaelhksixO2v?usp=sharing)

## 1. 리스트(List) 기초와 연결하기

리스트는 여러 개의 데이터를 하나의 상자에 순서대로 나란히 줄 세워 저장하는 파이썬의 가장 대표적인 자료형입니다.

### 🔹 리스트의 기본 구조와 인덱싱

- 리스트는 대괄호(\`[]\`)를 사용하며, 내부 데이터들은 콤마(\`,\`)로 구분합니다.
- 리스트 안의 방 번호를 인덱스(Index)라고 부르며, 숫자는 무조건 **0번**부터 시작합니다.

\`\`\`python
# 학생들의 성적을 모아둔 리스트
scores = [90, 85, 77, 95]

print(scores[0]) # 90 (첫 번째 데이터)
print(scores[2]) # 77 (세 번째 데이터)
\`\`\`

### 🔹 리스트와 리스트 연결하기 (\`+\` 연산자 및 \`extend()\`)

흩어져 있는 데이터 묶음을 하나로 합쳐야 할 때, 파이썬에서는 아주 직관적인 방법으로 리스트를 연결할 수 있습니다.

1. **\`+\` 연산자 사용:** 두 리스트를 더해 완전히 새로운 리스트를 만들어냅니다.
2. **\`extend()\` 메서드 사용:** 기존 리스트의 뒤에 다른 리스트를 그대로 이어 붙여 확장합니다.

\`\`\`python
group_a = ["Apple", "Banana"]
group_b = ["Cherry", "Orange"]

# 방법 1: + 연산자로 새 리스트 만들기
combined_list = group_a + group_b
print(combined_list) # ['Apple', 'Banana', 'Cherry', 'Orange']

# 방법 2: extend()로 기존 리스트 확장하기
group_a.extend(group_b)
print(group_a)        # ['Apple', 'Banana', 'Cherry', 'Orange']
\`\`\`

## 2. 간단한 데이터 처리 프로그램 구현

리스트에 담긴 데이터들을 다룰 때 파이썬 내장 함수를 사용하면 복잡한 연산도 단 한 줄로 처리할 수 있습니다.

- \`len(리스트)\`: 리스트 안에 든 데이터의 총 개수(길이)를 구합니다.
- \`sum(리스트)\`: 리스트 안의 모든 숫자를 더합니다.
- \`max(리스트)\` / \`min(리스트)\`: 리스트 안에서 가장 큰 값과 가장 작은 값을 찾습니다.

## 3. 🎯 [주간 실습] 데이터 처리 중심 알고리즘: 학급 성적 통계 프로그램

배운 리스트 연결 개념과 내장 함수를 활용하여, 두 개의 분반 성적 데이터를 하나로 합치고 총점, 평균, 그리고 최고/최저 점수를 자동으로 계산해 내는 통계 프로그램을 작성해 봅니다.

### 📝 실습 목표

- 1반 성적 리스트와 2반 성적 리스트를 입력받아 하나로 합칩니다.
- 합쳐진 전체 데이터를 바탕으로 학급의 총 데이터 개수, 총점, 평균 점수, 최고 점수, 최저 점수를 한눈에 보여주는 프로그램을 구현합니다.

#### ✅ 구현 코드

\`\`\`python
# 1. 분반별 성적 데이터 정의 (리스트)
class_1_scores = [85, 92, 78, 64]
class_2_scores = [90, 88, 72, 95, 81]

print("📊 데이터 처리 프로그램 시작")
print("1반 성적:", class_1_scores)
print("2반 성적:", class_2_scores)

# 2. 두 리스트 연결하기
# 1반과 2반의 데이터를 하나의 리스트로 결합합니다.
total_scores = class_1_scores + class_2_scores
print("\\n🔄 전체 학급 성적 데이터 통합 완료:")
print(total_scores)

# 3. 내장 함수를 활용한 데이터 처리 및 통계 계산
total_students = len(total_scores)  # 전체 학생 수 (데이터 개수)
score_sum = sum(total_scores)       # 총점
score_avg = score_sum / total_students # 평균 계산
max_score = max(total_scores)       # 최고 점수
min_score = min(total_scores)       # 최저 점수

# 4. 결과 출력
print("\\n--- 📈 통합 학급 성적 통계 결과 ---")
print("• 전체 학생 수 :", total_students, "명")
print("• 학급 총점     :", score_sum, "점")
print("• 학급 평균     :", round(score_avg, 2), "점") # 소수점 둘째 자리까지 반올림
print("• 최고 점수     :", max_score, "점")
print("• 최저 점수     :", min_score, "점")
\`\`\`

# 오늘의 알고리즘 문제 (복습시간)

## MBTI 분석하기

자신의 MBTI를 입력하여 어떤 성향에 해당하는지 결과를 출력한다.

조건문과 반복문을 활용하여 구현해보자.

\`\`\`python
# 자신의 MBTI를 입력하여 결과를 출력
energy_direction = '' # 에너지 방향
perception = '' # 인식 기능
decision = '' # 판단 기능
life_style = '' # 생활 양식

while True: # MBTI 입력을 틀리지 않고 입력했을 때 결과 출력 후 반복 종료
    print("*** MBTI 분석 ***")
    energy_input = input('당신은 E인지 I인지 입력하세요: ')
    percept_input = input('당신은 S인지 N인지 입력하세요: ')
    dec_input = input('당신은 T인지 F인지 입력하세요: ')
    life_style_input = input('당신은 J인지 P인지 입력하세요: ')
    success = 0 # 유형 분석에 성공한 횟수 (성공 횟수가 4일 때 분석 성공함)

    if energy_input == 'e' or energy_input == 'E': # 입력한 첫번째 글자가 e 또는 E일 때
        energy_direction = '외향형' # 에너지 방향 = '외향형'
        success += 1 # 성공 횟수 1 증가
    elif energy_input == 'i' or energy_input == 'I': # 입력한 첫번째 글자가 i 또는 I일 때
        energy_direction = '내향형' # 에너지 방향 = '내향형'
        success += 1 # 성공 횟수 1 증가

    if percept_input == 's' or percept_input == 'S': # 입력한 첫번째 글자가 s또는 S일 때
        perception = '감각형' # 인식 기능 = '감각형'
        success += 1 # 성공 횟수 1 증가
    elif percept_input == 'n' or percept_input == 'N': # 입력한 첫번째 글자가 n 또는 N일 때
        perception = '직관형' # 인식 기능 = '직관형'
        success += 1 # 성공 횟수 1 증가

    if dec_input == 't' or dec_input == 'T' : # 입력한 첫번째 글자가 t 또는 T일 때
        decision = '사고형' # 판단 기능 = '사고형'
        success += 1 # 성공 횟수 1 증가
    elif dec_input == 'f' or dec_input == 'F': # 입력한 첫번째 글자가 f 또는 F일 때
        decision = '감정형' # 판단 기능 = '감정형'
        success += 1 # 성공 횟수 1 증가

    if life_style_input == 'j' or life_style_input == 'J': # 입력한 첫번째 글자가 j 또는 J일 때
        life_style = '계획적(판단형)' # 생활 양식 = '계획적'
        success += 1 # 성공 횟수 1 증가
    elif life_style_input == 'p' or life_style_input == 'P': # 입력한 첫번째 글자가 p 또는 P일 때
        life_style = '즉흥적(인식형)' # 생활 양식 = '즉흥적'
        success += 1 # 성공 횟수 1 증가

    if success == 4: # 4가지 유형 분석에 성공했을 때
        print('*** MBTI 분석결과 ***')
        print('당신은 ', energy_direction, '이고 ', perception, '이며 ', decision, '이며 ', life_style, '입니다.')
        break # 성공적인 분석시 종료
    else: # MBTI 유형을 잘못입력함
        print('MBTI를 잘못 입력했습니다. 다시 입력해주세요.')
\`\`\`

## 동전게임

앞 = 0, 뒤 = 1

컴퓨터가 생각한 숫자와 내가 생각한 숫자가 같으면 빙고!

3 빙고를 달성하면 게임을 종료한다.

\`\`\`python
import random # 랜덤 숫자를 생성하기 위한 모듈을 불러옵니다.

# 동전 게임
count = 0 # 게임을 시도한 총 횟수를 기억할 변수입니다.
bingo_count = 0 # 동전의 앞/뒤를 맞춘(빙고) 횟수를 기억할 변수입니다.

while (True): # 무한 루프를 시작합니다. (게임을 끝낼 조건이 만족될 때까지 계속 반복)
    count = count + 1 # 게임이 한 번 시작될 때마다 시도 횟수를 1씩 증가시킵니다.
    print('***', count, '회 동전게임 ***') # 현재 몇 번째 게임인지 화면에 출력합니다.

    r = random.randrange(0, 2) # 컴퓨터가 0(앞면) 또는 1(뒷면) 중 하나를 무작위로 선택합니다.
    direction = int(input('앞(0)/뒤(1) 입력: ')) # 사용자에게 0 또는 1을 입력받고, 계산을 위해 정수(int)로 변환합니다.

    if r == direction: # 컴퓨터가 뽑은 숫자와 사용자가 입력한 숫자가 같다면
        print('Bingo!') # 정답(빙고) 메시지를 출력합니다.
        bingo_count = bingo_count + 1 # 정답을 맞췄으므로 빙고 횟수를 1 증가시킵니다.
    else: # 컴퓨터가 뽑은 숫자와 사용자가 입력한 숫자가 다르다면
        print('Not Bingo...') # 오답 메시지를 출력합니다.

    if bingo_count == 3: # 만약 지금까지 누적된 빙고 횟수가 총 3번이 되었다면
        print('빙고를 3번 맞춰서 게임을 종료합니다.') # 종료 안내 메시지를 띄웁니다.
        print('*** 총 시도 횟수: ', count, '회 ***') # 게임을 총 몇 번 시도했는지 알려줍니다.
        break # while 무한 루프를 완전히 빠져나가며 게임을 최종 종료합니다.
\`\`\`

### 📝 동전 게임 코드 한 줄 해석 표

| **코드** | **상세 설명** |
| --- | --- |
| \`import random\` | 파이썬이 기본으로 제공하는 '랜덤 도구 상자'를 가져옵니다. 무작위 숫자를 뽑을 때 필요합니다. |
| \`count = 0\`<br>\`bingo_count = 0\` | 게임 횟수와 맞춘 횟수를 기록할 빈 상자(변수) 2개를 만들고 0으로 초기화합니다. |
| \`while (True):\` | 조건이 항상 참(\`True\`)이므로 무한히 반복되는 루프를 엽니다. 안에 있는 코드들이 계속 반복 실행됩니다. |
| \`count = count + 1\` | 루프가 한 바퀴 돌 때마다(게임 1회 진행) 전체 시도 횟수를 1씩 올립니다. |
| \`print('***', count, '회...')\` | 방금 1 증가시킨 \`count\` 변수를 사용해 현재 몇 번째 판인지 화면에 보여줍니다. |
| \`r = random.randrange(0, 2)\` | 컴퓨터가 0부터 1까지(2 미만)의 숫자 중 하나를 몰래 골라서 \`r\`이라는 상자에 담습니다. |
| \`direction = int(input(...))\` | \`input\`으로 사용자의 대답을 받고, 숫자 비교를 하기 위해 \`int()\`를 씌워 문자를 정수로 바꿔줍니다. |
| \`if r == direction:\` | 컴퓨터가 뽑은 숫자(\`r\`)와 내가 입력한 숫자(\`direction\`)가 똑같은지(\`==\`) 비교합니다. |
| \`print('Bingo!')\`<br>\`bingo_count = bingo_count + 1\` | 위 조건이 참이면 'Bingo!'를 출력하고, 정답을 맞춘 횟수 상자에 1을 더해줍니다. |
| \`else:\`<br>\`print('Not Bingo...')\` | 위 조건이 거짓이면(둘의 숫자가 다르면) 아쉽다는 메시지를 출력합니다. |
| \`if bingo_count == 3:\` | 매 판이 끝날 때마다, 지금까지 맞춘 정답 횟수가 목표치인 3번이 되었는지 검사합니다. |
| \`print(...)\`<br>\`break\` | 정답 횟수가 3번이 되면 결과 화면을 띄워주고, \`break\`를 사용해 빙글빙글 돌던 \`while\` 무한 루프를 깨고 탈출합니다. |

## 📝 파이썬 기초 종합 복습 퀴즈 (1~5주차)

### 🟢 [OX 퀴즈] 맞으면 O, 틀리면 X를 선택해 주세요.

**문제 1.** \`input()\` 함수를 사용하여 사용자로부터 숫자를 입력받으면, 파이썬은 이 데이터를 정수형(\`int\`)으로 인식한다. ( O / X )

**문제 2.** 조건문 \`if-elif-else\` 구조에서 \`else\` 뒤에는 반드시 조건을 명시해야 한다. ( O / X )

**문제 3.** 반복문 안에서 \`break\`를 만나면 현재 반복을 즉시 멈추고 반복문을 완전히 빠져나간다. ( O / X )

### 🔵 [객관식 퀴즈] 알맞은 답을 하나 고르세요.

**문제 4.** 다음 중 변수 이름으로 사용할 수 **없는** 것은 무엇일까요?

1. \`my_score\`
2. \`score1\`
3. \`1st_score\`
4. \`TotalScore\`

**문제 5.** 다음 코드의 실행 결과로 알맞은 것은 무엇일까요?

\`\`\`python
print(10 % 3)
\`\`\`

1. \`3\`
2. \`3.333\`
3. \`1\`
4. \`0\`

**문제 6.** 다음 코드에서 \`print("Hello")\`는 총 몇 번 실행될까요?

\`\`\`python
for i in range(5):
    print("Hello")
\`\`\`

1. 4번
2. 5번
3. 6번
4. 무한 반복

**문제 7.** 두 개의 리스트 \`a = [1, 2]\`와 \`b = [3, 4]\`가 있습니다. \`a + b\`를 실행했을 때의 결과는 무엇일까요?

1. \`[4, 6]\`
2. \`[[1, 2], [3, 4]]\`
3. \`[1, 2, 3, 4]\`
4. 에러 발생

### 🟣 [단답형 퀴즈] 빈칸이나 질문에 알맞은 답을 적어주세요.

**문제 8.** 파이썬에서 변수에 담긴 데이터의 종류(자료형)를 확인하고 싶을 때 사용하는 내장 함수의 이름은 무엇인가요?

- 답: ( )

**문제 9.** 파이썬의 리스트(List)에서 첫 번째 데이터가 들어있는 방 번호(인덱스)는 몇 번일까요?

- 답: ( )번

**문제 10.** 다음 코드가 실행된 후, 화면에 출력되는 최종 결과값을 적어주세요.

\`\`\`python
scores = [10, 20, 30]
total = 0

for s in scores:
    total = total + s

print(total)
\`\`\`

- 답: ( )

<details>
<summary>💡 정답 및 해설 보기 (클릭)</summary>

### ✅ 정답 및 해설

**1. X**

- **해설:** \`input()\` 함수로 입력받은 데이터는 숫자를 입력하더라도 무조건 문자열(\`str\`)로 인식됩니다. 연산을 위해서는 \`int()\`나 \`float()\`로 형변환을 해주어야 합니다. (2주차 내용)

**2. X**

- **해설:** \`if\`와 \`elif\` 뒤에는 조건을 명시해야 하지만, \`else\`는 '위의 모든 조건이 거짓일 때' 실행되므로 **조건식을 적지 않습니다.** (3주차 내용)

**3. O**

- **해설:** \`break\`는 반복문을 완전히 탈출합니다. 참고로 이번 반복만 건너뛰고 다음 반복으로 넘어가는 명령어는 \`continue\`입니다. (4주차 내용)

**4. 3번 (\`1st_score\`)**

- **해설:** 파이썬에서 변수 이름은 숫자로 시작할 수 없습니다. 영문자나 언더바(\`_\`)로 시작해야 합니다. (2주차 내용)

**5. 3번 (\`1\`)**

- **해설:** \`%\` 기호는 나눗셈의 **나머지**를 구하는 연산자입니다. 10을 3으로 나누면 몫이 3이고 나머지가 1이 됩니다. (3주차 내용)

**6. 2번 (5번)**

- **해설:** \`range(5)\`는 0부터 4까지 총 5번의 반복을 만들어냅니다. (4주차 내용)

**7. 3번 (\`[1, 2, 3, 4]\`)**

- **해설:** 리스트와 리스트 사이에 \`+\` 연산자를 사용하면, 두 리스트 안의 숫자가 더해지는 것이 아니라 리스트 자체가 앞뒤로 연결(병합)됩니다. (5주차 내용)

**8. \`type()\`**

- **해설:** 데이터의 형태(타입)를 확인할 때 사용하는 필수 내장 함수입니다. (2주차 내용)

**9. 0번**

- **해설:** 파이썬을 포함한 대부분의 프로그래밍 언어에서 리스트(배열)의 인덱스는 1이 아닌 **0부터 시작**합니다(Zero-based Indexing). (5주차 내용)

**10. 60**

- **해설:** 반복문과 리스트가 결합된 코드입니다. \`scores\` 리스트 안에 있는 10, 20, 30이 순서대로 \`s\`에 들어가며 \`total\`에 누적되어 더해지므로 최종 값은 60이 됩니다. (4, 5주차 융합 내용)

</details>
`,q=`# 📝 [6주차] 파이썬 심화 개념 및 웹페이지 최종 완성

[Google Colab](https://colab.research.google.com/drive/1tuuBpP4xV5Ch-u90hiUjNP7uJEcmHqaP?usp=sharing)

## 1. 파이썬 심화 개념 맛보기 (튜플, 딕셔너리, 함수)

앞으로 파이썬을 더 깊게 공부할 때 반드시 만나게 될 세 가지 핵심 개념의 '역할'만 간단히 짚어봅니다.

### 🔹 튜플(Tuple): 변하지 않는 튼튼한 리스트

리스트(\`[]\`)와 비슷하게 여러 데이터를 순서대로 담지만, 소괄호 \`()\`를 사용합니다. 가장 큰 특징은 '불변성(Immutable)'입니다.

- **핵심 특징:**
    - **수정 불가:** 한 번 만들어지면 안의 데이터를 추가, 삭제, 변경할 수 없습니다. 실수로 데이터가 바뀌는 것을 막아주어 중요한 설정값, 고정된 좌표 등을 보호할 때 씁니다.
    - **빠른 속도:** 리스트보다 메모리를 적게 차지하고 처리 속도가 빠릅니다.
- **자주 사용하는 함수:** (데이터를 바꿀 수 없으므로, 주로 데이터를 '조회'하는 함수만 존재합니다)
    - \`len(튜플)\`: 튜플 안에 데이터가 몇 개 있는지 확인합니다.
    - \`.count(값)\`: 튜플 안에 특정 값이 몇 번 등장하는지 세어줍니다.
    - \`.index(값)\`: 특정 값이 몇 번째 방(인덱스)에 있는지 찾아줍니다.

\`\`\`python
# 튜플 생성 및 함수 활용
my_tuple = ("Apple", "Banana", "Apple", "Cherry")

print(len(my_tuple))       # 출력: 4 (총 데이터 개수)
print(my_tuple.count("Apple")) # 출력: 2 (Apple이 2개 있음)
print(my_tuple.index("Banana"))# 출력: 1 (1번 인덱스에 위치함)

# my_tuple[0] = "Melon" -> 에러 발생! (튜플은 수정할 수 없습니다)
\`\`\`

### 🔹 딕셔너리(Dictionary): 이름표가 붙은 데이터 사전

중괄호 \`{}\`를 사용하며, 단어(Key)를 찾으면 뜻(Value)이 나오는 실제 사전처럼 동작합니다. 수많은 데이터 속에서도 방 번호(인덱스)가 아닌 '이름표'로 데이터를 즉각적으로 찾아냅니다.

- **핵심 특징:**
    - **Key-Value 쌍:** 항상 이름표(Key)와 실제 데이터(Value)가 한 쌍으로 묶여 다닙니다.
    - **초고속 검색:** 데이터가 몇 만 개가 있더라도, Key만 알면 순서와 상관없이 한 번에 데이터를 찾아냅니다.
- **자주 사용하는 함수:**
    - \`.keys()\`: 딕셔너리 안의 모든 이름표(Key)들만 모아서 보여줍니다.
    - \`.values()\`: 딕셔너리 안의 모든 실제 데이터(Value)들만 모아서 보여줍니다.
    - \`.items()\`: Key와 Value를 한 쌍으로 묶어서 한꺼번에 보여줍니다. (반복문과 찰떡궁합입니다)
    - \`.get(Key)\`: 특정 Key의 Value를 안전하게 가져옵니다. (없는 Key를 찾아도 에러를 내지 않고 \`None\`을 반환하는 안전장치입니다)

\`\`\`python
# 딕셔너리 생성
student_info = {"이름": "김튜티", "나이": 20, "전공": "컴퓨터공학"}

# 기본 검색과 get() 함수의 차이
print(student_info["이름"])       # 출력: 김튜티
print(student_info.get("학점"))   # 출력: None (없는 이름표지만 에러가 나지 않음)

# 자주 쓰는 함수 활용
print(student_info.keys())   # dict_keys(['이름', '나이', '전공'])
print(student_info.values()) # dict_values(['김튜티', 20, '컴퓨터공학'])

# 반복문과 items()의 조합
for key, value in student_info.items():
    print(key, ":", value)
\`\`\`

### 🔹 함수(Function): 나만의 마법 상자 만들기

지금까지 우리가 편하게 썼던 \`print()\`, \`input()\`, \`len()\` 등은 모두 파이썬이 미리 만들어둔 마법 상자(함수)였습니다. 이제 우리는 \`def\` 키워드를 사용해 나만의 도구를 직접 만들 수 있습니다.

- **핵심 구조:**
    - **입력(매개변수):** 함수에 던져줄 재료
    - **처리(실행 코드):** 재료를 지지고 볶는 과정
    - **출력(반환값, return):** 완성된 결과물을 밖으로 내보내기

\`\`\`python
# '더하기 로봇' 함수 만들기
def add_numbers(a, b): # a와 b라는 재료를 받아서
    result = a + b     # 더하는 처리를 하고
    return result      # 결과값을 돌려줍니다(return)

# 만들어둔 함수 사용하기
my_sum = add_numbers(10, 20)
print(my_sum) # 출력: 30
\`\`\`

## 2. 💡 [총정리] 6주간의 파이썬 프로그래밍 여정

튜티와 함께 백지상태에서 시작해 여기까지 온 과정입니다. 우리가 컴퓨터와 소통하기 위해 어떤 단계들을 거쳤는지 되돌아봅니다.

1. **개발 환경 구축 (1주차):** 파이썬과 VSCode를 설치하며 내 컴퓨터에 코딩을 위한 빈 도화지를 준비했습니다.
2. **변수와 자료형, 입출력 (2주차):** 데이터를 상자(변수)에 담고, 숫자와 문자 등의 형태(자료형)를 구분하며 \`input/print\`로 컴퓨터와 첫 대화를 나누었습니다.
3. **연산자와 조건문 (3주차):** \`if-elif-else\`를 통해 특정 상황(조건)에 따라 프로그램이 다르게 행동하도록 논리적인 흐름을 만들었습니다.
4. **반복문 (4주차):** \`for\`와 \`while\`을 사용해 수백 번의 똑같은 작업을 단 몇 줄의 코드로 자동화하는 마법을 경험했습니다.
5. **리스트와 데이터 활용 (5주차):** 단일 데이터를 넘어, 수많은 데이터를 하나의 리스트로 묶어 관리하고 통계를 내는 방법을 배웠습니다.
6. **마무리 (6주차):** 데이터를 다루는 더 다양한 방법(튜플, 딕셔너리)과 코드를 정리하는 함수를 엿보며 기초를 다졌습니다.

## 3. 🎯 웹페이지 완성 및 발표 (최종 프로젝트)

그동안 정리해 온 주차별 학습 기록을 모아 웹사이트를 최종 완성합니다.

### 🔹 콘텐츠 점검 및 웹사이트 리뉴얼

- **6주차 내용 업데이트:** 이번 주에 다룬 심화 개념과 총정리 내용을 웹페이지 6주차 세션에 추가합니다.
- **직관적인 브랜딩:** 웹사이트의 이름과 아이콘(파비콘)을 변경합니다. 복잡한 텍스트보다는 직관적이고 군더더기 없는 미니멀한 디자인의 아이콘을 배치하고, 여백을 적절히 활용하여 사용자가 콘텐츠에 온전히 집중할 수 있도록 깔끔한 UI/UX를 구성해 보세요.
- **QA 및 오류 수정:** 실제 사용자의 시나리오를 가정하고 웹사이트의 모든 링크, 버튼, 이미지 렌더링이 정상적으로 작동하는지 꼼꼼하게 테스트합니다. 모바일 화면 비율에서도 텍스트가 깨지지 않는지 반응형 레이아웃을 점검하는 것이 좋습니다.

### 🔹 결과 발표 및 피드백

- 튜티가 6주간 가장 흥미로웠던 실습이나 어려웠던 점을 편안하게 이야기할 수 있는 시간을 가집니다.
- 완성된 웹사이트를 함께 리뷰하며, 앞으로 튜티가 파이썬으로 어떤 토이 프로젝트를 더 해볼 수 있을지 다음 스텝(예: 웹 크롤링, 간단한 게임 만들기)을 가볍게 제시하며 튜터링을 훈훈하게 마무리합니다.
`,b={1:J,2:R,3:F,4:G,5:U,6:q},Q=({node:e,inline:l,className:o,children:s,...t})=>{const r=/language-(\w+)/.exec(o||""),[u,h]=m.useState(!1),p=String(s).replace(/\n$/,""),_=()=>{navigator.clipboard.writeText(p),h(!0),setTimeout(()=>h(!1),2e3)};return!l&&r?n.jsxs("div",{className:"code-block-wrapper",children:[n.jsxs("button",{className:"copy-button",onClick:_,children:[u?n.jsx(E,{size:14}):n.jsx(B,{size:14}),n.jsx("span",{children:u?"Copied!":"Copy"})]}),n.jsx(H,{style:D,language:r[1],PreTag:"div",customStyle:{margin:0,padding:"24px",borderRadius:"12px",fontSize:"0.9rem",lineHeight:"1.5",backgroundColor:"#1E1E1E"},...t,children:p})]}):n.jsx("code",{className:o,...t,children:s})},f=e=>e==null?"":typeof e=="string"||typeof e=="number"?e.toString():Array.isArray(e)?e.map(f).join(""):e.props&&e.props.children?f(e.props.children):"",x=e=>e.replace(/[`*_\\]/g,"").trim().replace(/\s+/g,"-").toLowerCase();function $({theme:e,toggleTheme:l}){const{week:o}=C(),s=parseInt(o,10),t=N.find(a=>a.week===s),[r,u]=m.useState([]),[h,p]=m.useState(!1),_=b[s]||`# 콘텐츠가 아직 준비되지 않았습니다.
추후 업데이트 예정입니다.`;return m.useEffect(()=>{if(window.scrollTo(0,0),p(!1),b[s]){const a=[],i=/^(##\s)(.*)/gm;let c;for(;(c=i.exec(b[s]))!==null;)a.push(c[2].trim());u(a)}else u([])},[s]),t?n.jsxs("div",{className:"note-layout",children:[n.jsxs("div",{className:"mobile-header",children:[n.jsxs("button",{className:"menu-toggle-btn",onClick:()=>p(!0),children:[n.jsx(T,{size:20}),n.jsx("span",{children:"목차"})]}),n.jsx("button",{className:"theme-toggle-btn",onClick:l,"aria-label":"Toggle Theme",style:{padding:"8px"},children:e==="light"?n.jsx(j,{size:18}):n.jsx(k,{size:18})}),n.jsx(y,{to:"/",className:"mobile-home-link",children:"Home"})]}),h&&n.jsx("div",{className:"sidebar-backdrop",onClick:()=>p(!1)}),n.jsxs("aside",{className:`sidebar ${h?"open":""}`,children:[n.jsx("button",{className:"sidebar-close-btn",onClick:()=>p(!1),children:n.jsx(S,{size:20})}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"40px"},children:[n.jsxs(y,{to:"/",className:"back-link",onClick:()=>p(!1),style:{marginBottom:0},children:[n.jsx(I,{size:18}),"Back to Home"]}),n.jsx("button",{className:"theme-toggle-btn sidebar-theme-btn",onClick:l,"aria-label":"Toggle Theme",children:e==="light"?n.jsx(j,{size:16}):n.jsx(k,{size:16})})]}),n.jsxs("div",{className:"sidebar-header",children:[n.jsx("div",{className:"sidebar-logo-container",children:n.jsx(y,{to:"/",children:n.jsx("img",{src:v,alt:"Canola Python Logo",className:"sidebar-logo"})})}),n.jsxs("span",{className:"sidebar-week-label",children:["WEEK ",t.week]}),n.jsx("h2",{className:"sidebar-title",children:t.title})]}),r.length>0&&n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{className:"sidebar-section-title",children:"CONTENTS"}),n.jsx("ul",{className:"sidebar-menu",children:r.map((a,i)=>{const c=x(a);return n.jsx("li",{className:"sidebar-menu-item",children:n.jsx("a",{href:`#${c}`,onClick:d=>{d.preventDefault(),p(!1);const g=document.getElementById(c);g&&g.scrollIntoView({behavior:"smooth"})},children:a})},i)})})]}),n.jsxs("div",{className:"sidebar-section",children:[n.jsx("h3",{className:"sidebar-section-title",children:"OTHER WEEKS"}),n.jsx("ul",{className:"sidebar-menu",children:N.map(a=>n.jsx("li",{className:"sidebar-menu-item",children:n.jsxs(y,{to:`/note/${a.week}`,className:a.week===s?"active":"",onClick:()=>p(!1),children:["Week ",a.week]})},a.week))})]})]}),n.jsx("main",{className:"note-content",children:n.jsx("div",{className:"note-content-inner",children:n.jsx(P,{remarkPlugins:[L],rehypePlugins:[V],components:{code:Q,h1:({node:a,...i})=>{const c=f(i.children),d=x(c);return n.jsx("h1",{id:d,...i})},h2:({node:a,...i})=>{const c=f(i.children),d=x(c);return n.jsx("h2",{id:d,...i})},a:({node:a,href:i,children:c,...d})=>{const g=(i==null?void 0:i.startsWith("http://"))||(i==null?void 0:i.startsWith("https://"));return n.jsx("a",{href:i,target:g?"_blank":void 0,rel:g?"noopener noreferrer":void 0,...d,children:c})}},children:_})})})]}):n.jsx("div",{className:"container",children:"Week not found"})}function Y(){const[e,l]=m.useState(()=>{const s=localStorage.getItem("theme");return s||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")});m.useEffect(()=>{document.documentElement.setAttribute("data-theme",e),localStorage.setItem("theme",e)},[e]);const o=()=>{l(s=>s==="light"?"dark":"light")};return n.jsx(O,{children:n.jsxs(A,{children:[n.jsx(w,{path:"/",element:n.jsx(z,{theme:e,toggleTheme:o})}),n.jsx(w,{path:"/note/:week",element:n.jsx($,{theme:e,toggleTheme:o})})]})})}M.createRoot(document.getElementById("root")).render(n.jsx(m.StrictMode,{children:n.jsx(Y,{})}));
