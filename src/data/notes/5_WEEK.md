# 📝 [5주차] 리스트와 데이터 활용: 대량의 데이터 다루기

[Google Colab](https://colab.research.google.com/drive/1I90F0XZ9qhGCtYpvUNZnWaelhksixO2v?usp=sharing)

## 1. 리스트(List) 기초와 연결하기

리스트는 여러 개의 데이터를 하나의 상자에 순서대로 나란히 줄 세워 저장하는 파이썬의 가장 대표적인 자료형입니다.

### 🔹 리스트의 기본 구조와 인덱싱

- 리스트는 대괄호(`[]`)를 사용하며, 내부 데이터들은 콤마(`,`)로 구분합니다.
- 리스트 안의 방 번호를 인덱스(Index)라고 부르며, 숫자는 무조건 **0번**부터 시작합니다.

```python
# 학생들의 성적을 모아둔 리스트
scores = [90, 85, 77, 95]

print(scores[0]) # 90 (첫 번째 데이터)
print(scores[2]) # 77 (세 번째 데이터)
```

### 🔹 리스트와 리스트 연결하기 (`+` 연산자 및 `extend()`)

흩어져 있는 데이터 묶음을 하나로 합쳐야 할 때, 파이썬에서는 아주 직관적인 방법으로 리스트를 연결할 수 있습니다.

1. **`+` 연산자 사용:** 두 리스트를 더해 완전히 새로운 리스트를 만들어냅니다.
2. **`extend()` 메서드 사용:** 기존 리스트의 뒤에 다른 리스트를 그대로 이어 붙여 확장합니다.

```python
group_a = ["Apple", "Banana"]
group_b = ["Cherry", "Orange"]

# 방법 1: + 연산자로 새 리스트 만들기
combined_list = group_a + group_b
print(combined_list) # ['Apple', 'Banana', 'Cherry', 'Orange']

# 방법 2: extend()로 기존 리스트 확장하기
group_a.extend(group_b)
print(group_a)        # ['Apple', 'Banana', 'Cherry', 'Orange']
```

## 2. 간단한 데이터 처리 프로그램 구현

리스트에 담긴 데이터들을 다룰 때 파이썬 내장 함수를 사용하면 복잡한 연산도 단 한 줄로 처리할 수 있습니다.

- `len(리스트)`: 리스트 안에 든 데이터의 총 개수(길이)를 구합니다.
- `sum(리스트)`: 리스트 안의 모든 숫자를 더합니다.
- `max(리스트)` / `min(리스트)`: 리스트 안에서 가장 큰 값과 가장 작은 값을 찾습니다.

## 3. 🎯 [주간 실습] 데이터 처리 중심 알고리즘: 학급 성적 통계 프로그램

배운 리스트 연결 개념과 내장 함수를 활용하여, 두 개의 분반 성적 데이터를 하나로 합치고 총점, 평균, 그리고 최고/최저 점수를 자동으로 계산해 내는 통계 프로그램을 작성해 봅니다.

### 📝 실습 목표

- 1반 성적 리스트와 2반 성적 리스트를 입력받아 하나로 합칩니다.
- 합쳐진 전체 데이터를 바탕으로 학급의 총 데이터 개수, 총점, 평균 점수, 최고 점수, 최저 점수를 한눈에 보여주는 프로그램을 구현합니다.

#### ✅ 구현 코드

```python
# 1. 분반별 성적 데이터 정의 (리스트)
class_1_scores = [85, 92, 78, 64]
class_2_scores = [90, 88, 72, 95, 81]

print("📊 데이터 처리 프로그램 시작")
print("1반 성적:", class_1_scores)
print("2반 성적:", class_2_scores)

# 2. 두 리스트 연결하기
# 1반과 2반의 데이터를 하나의 리스트로 결합합니다.
total_scores = class_1_scores + class_2_scores
print("\n🔄 전체 학급 성적 데이터 통합 완료:")
print(total_scores)

# 3. 내장 함수를 활용한 데이터 처리 및 통계 계산
total_students = len(total_scores)  # 전체 학생 수 (데이터 개수)
score_sum = sum(total_scores)       # 총점
score_avg = score_sum / total_students # 평균 계산
max_score = max(total_scores)       # 최고 점수
min_score = min(total_scores)       # 최저 점수

# 4. 결과 출력
print("\n--- 📈 통합 학급 성적 통계 결과 ---")
print("• 전체 학생 수 :", total_students, "명")
print("• 학급 총점     :", score_sum, "점")
print("• 학급 평균     :", round(score_avg, 2), "점") # 소수점 둘째 자리까지 반올림
print("• 최고 점수     :", max_score, "점")
print("• 최저 점수     :", min_score, "점")
```

# 오늘의 알고리즘 문제 (복습시간)

## MBTI 분석하기

자신의 MBTI를 입력하여 어떤 성향에 해당하는지 결과를 출력한다.

조건문과 반복문을 활용하여 구현해보자.

```python
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
```

## 동전게임

앞 = 0, 뒤 = 1

컴퓨터가 생각한 숫자와 내가 생각한 숫자가 같으면 빙고!

3 빙고를 달성하면 게임을 종료한다.

```python
import random

# 동전 게임

count = 0
bingo_count = 0 # 빙고가 나온 횟수

while (True):
    count = count + 1
    print('***', count, '회 동전게임 ***')
    r = random.randrange(0, 2) # 컴퓨터가 random 생성 (앞:0, 뒤:1)
    direction = int(input('앞(0)/뒤(1) 입력: '))

    if r == direction:
        print('Bingo!')
        bingo_count = bingo_count + 1
    else:
        print('Not Bingo...')

    if bingo_count == 3:
        print('빙고를 3번 맞춰서 게임을 종료합니다.')
        print('*** 총 시도 횟수: ', count, '회 ***')
        break
```
