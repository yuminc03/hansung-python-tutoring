import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ChevronLeft, Copy, Check } from 'lucide-react';
import { WEEKS_DATA } from '../data/curriculum';
import week1Md from '../data/notes/1_WEEK.md?raw';
import '../index.css';

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  const [copied, setCopied] = useState(false);
  const codeString = String(children).replace(/\n$/, '');

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!inline && match) {
    return (
      <div className="code-block-wrapper">
        <button className="copy-button" onClick={handleCopy}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          customStyle={{
            margin: 0,
            padding: '24px',
            borderRadius: '12px',
            fontSize: '0.9rem',
            lineHeight: '1.5',
            backgroundColor: '#1E1E1E'
          }}
          {...props}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    );
  }
  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default function Note() {
  const { week } = useParams();
  const currentWeekNum = parseInt(week, 10);
  const weekData = WEEKS_DATA.find((item) => item.week === currentWeekNum);
  
  const [toc, setToc] = useState([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    if (currentWeekNum === 1 && week1Md) {
      const headings = [];
      const regex = /^(##\s)(.*)/gm;
      let match;
      while ((match = regex.exec(week1Md)) !== null) {
        headings.push(match[2].trim());
      }
      setToc(headings);
    } else {
      setToc([]);
    }
  }, [currentWeekNum]);

  const markdownContent = currentWeekNum === 1 ? week1Md : '# 콘텐츠가 아직 준비되지 않았습니다.\n추후 업데이트 예정입니다.';

  if (!weekData) {
    return <div className="container">Week not found</div>;
  }

  return (
    <div className="note-layout">
      <aside className="sidebar">
        <Link to="/" className="back-link">
          <ChevronLeft size={18} />
          Back to Home
        </Link>
        
        <div className="sidebar-header">
          <span className="sidebar-week-label">WEEK {weekData.week}</span>
          <h2 className="sidebar-title">{weekData.title}</h2>
        </div>

        {toc.length > 0 && (
          <div className="sidebar-section">
            <h3 className="sidebar-section-title">CONTENTS</h3>
            <ul className="sidebar-menu">
              {toc.map((heading, idx) => (
                <li key={idx} className="sidebar-menu-item">
                  <a href={`#${heading.replace(/\s+/g, '-').toLowerCase()}`}>{heading}</a>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">OTHER WEEKS</h3>
          <ul className="sidebar-menu">
            {WEEKS_DATA.map((item) => (
              <li key={item.week} className="sidebar-menu-item">
                <Link 
                  to={`/note/${item.week}`} 
                  className={item.week === currentWeekNum ? 'active' : ''}
                >
                  Week {item.week}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <main className="note-content">
        <div className="note-content-inner">
          <ReactMarkdown
            components={{
              code: CodeBlock,
              h1: ({node, ...props}) => {
                const id = props.children[0]?.toString().replace(/\s+/g, '-').toLowerCase();
                return <h1 id={id} {...props} />;
              },
              h2: ({node, ...props}) => {
                const id = props.children[0]?.toString().replace(/\s+/g, '-').toLowerCase();
                return <h2 id={id} {...props} />;
              }
            }}
          >
            {markdownContent}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}
