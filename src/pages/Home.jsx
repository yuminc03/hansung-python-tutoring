import React from 'react';
import { Link } from 'react-router-dom';
import { WEEKS_DATA } from '../data/curriculum';
import '../index.css';

export default function Home() {
  return (
    <div className="container">
      <header className="hero">
        <h1 className="hero-title">Python Log: 6 Weeks of Learning</h1>
        <p className="hero-subtitle">
          2026학년도 1학기 미래플러스대학 한성 AX 융합 튜터링<br />
          '파이썬 프로그래밍' 과목의 6주간 학습 및 멘토링 과정을 기록하는 아카이브입니다.
        </p>
      </header>

      <main className="grid-container">
        {WEEKS_DATA.map((item) => (
          <div key={item.week} className="card">
            <span className="card-week">WEEK {item.week}</span>
            <h2 className="card-title">{item.title}</h2>
            <p className="card-summary">{item.summary}</p>
            <div className="card-footer">
              <Link to={`/note/${item.week}`} className="card-link">View notes &rarr;</Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
