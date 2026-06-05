import React from 'react';
import { Link } from 'react-router-dom';
import { WEEKS_DATA } from '../data/curriculum';
import canolaPythonLogo from '../assets/canola_python.svg';
import githubLogo from '../assets/github.svg';
import creatorDevImg from '../assets/creator_dev.png';
import creatorPythonImg from '../assets/creator_python.png';
import '../index.css';

export default function Home() {
  return (
    <div className="container">
      <header className="hero">
        <div className="hero-logo-container">
          <img src={canolaPythonLogo} alt="Canola Python Logo" className="hero-logo" />
        </div>
        <h1 className="hero-title">Canola Python</h1>
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

      <section className="creator-section">
        <div className="creator-card">
          <div className="creator-avatars">
            <img src={creatorDevImg} alt="Tutor Yumin Chu" className="creator-avatar" />
            <img src={creatorPythonImg} alt="Tutee" className="creator-avatar" />
          </div>
          <div className="creator-info">
            <span className="creator-title-label">ABOUT THE CREATOR</span>
            <h2 className="creator-name">Yumin Chu</h2>
            <p className="creator-description">
              6주간의 파이썬 여정을 기록하는 튜터, AI.소프트웨어학과 25학번 추유민입니다.<br />
              유채꽃 가득한 봄날처럼, 쉽고 재미있게 파이썬 프로그래밍을 학습할 수 있도록 돕습니다.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p className="footer-info">© 2026 Canola Python. All rights reserved. Created by Yumin Chu</p>
          <a href="https://github.com/yuminc03/hansung-python-tutoring" target="_blank" rel="noopener noreferrer" className="footer-link" title="GitHub Repository">
            <img src={githubLogo} alt="GitHub Logo" className="footer-github-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}
