import React from 'react';
import './index.css';

const WEEKS_DATA = [
  { 
    week: 1, 
    title: 'Python Basics', 
    summary: 'Variables, data types, and basic operators' 
  },
  { 
    week: 2, 
    title: 'Control Flow', 
    summary: 'Conditionals, loops, and logical operators' 
  },
  { 
    week: 3, 
    title: 'Functions', 
    summary: 'Defining functions, parameters, and return values' 
  },
  { 
    week: 4, 
    title: 'Data Structures', 
    summary: 'Lists, dictionaries, tuples, and sets' 
  },
  { 
    week: 5, 
    title: 'Object-Oriented Programming', 
    summary: 'Classes, objects, inheritance, and polymorphism' 
  },
  { 
    week: 6, 
    title: 'File I/O & Modules', 
    summary: 'Reading/writing files and working with modules' 
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
