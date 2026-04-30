import React from 'react';
import './index.css';

const WEEKS_DATA = [
  { 
    week: 1, 
    title: '파이썬 입문과 개발환경 구축', 
    summary: '파이썬 첫걸음, VS Code 설치 및 알고리즘 기초 이해' 
  },
  { 
    week: 2, 
    title: '변수와 자료형 이해', 
    summary: '데이터 변수 사용법, 기본 자료형 학습 및 입출력 프로그램 작성' 
  },
  { 
    week: 3, 
    title: '연산자와 조건문', 
    summary: '연산자, 조건식, operator 모듈 학습 및 조건문 실습' 
  },
  { 
    week: 4, 
    title: '반복문과 알고리즘 구현', 
    summary: '반복문, 무한루프, 중첩 반복문 학습 및 문제 해결 실습' 
  },
  { 
    week: 5, 
    title: '리스트와 데이터 활용', 
    summary: '리스트 개념 학습 및 간단한 데이터 처리 프로그램 구현' 
  },
  { 
    week: 6, 
    title: '웹페이지 완성 및 발표', 
    summary: '최종 구현물 점검, 오류 수정 및 결과 발표' 
  },
];

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1 className="hero-title">Python Log: 6 Weeks of Learning</h1>
        <p className="hero-subtitle">
          A comprehensive archive documenting the journey through fundamental Python concepts
        </p>
      </header>

      <main className="grid-container">
        {WEEKS_DATA.map((item) => (
          <div key={item.week} className="card">
            <span className="card-week">WEEK {item.week}</span>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-summary">{item.summary}</p>
            <div className="card-footer">
              <a href={`/note/${item.week}`} className="card-link">View notes &rarr;</a>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
