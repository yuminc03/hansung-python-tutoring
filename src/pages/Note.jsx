import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ChevronLeft, Copy, Check, Menu, X, Sun, Moon } from 'lucide-react';
import { WEEKS_DATA } from '../data/curriculum';
import week1Md from '../data/notes/1_WEEK.md?raw';
import week2Md from '../data/notes/2_WEEK.md?raw';
import week3Md from '../data/notes/3_WEEK.md?raw';
import week4Md from '../data/notes/4_WEEK.md?raw';
import week5Md from '../data/notes/5_WEEK.md?raw';
import week6Md from '../data/notes/6_WEEK.md?raw';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import canolaPythonLogo from '../assets/canola_python.svg';
import '../index.css';

const mdFiles = {
  1: week1Md,
  2: week2Md,
  3: week3Md,
  4: week4Md,
  5: week5Md,
  6: week6Md,
};

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

const getChildText = (child) => {
  if (child == null) return '';
  if (typeof child === 'string' || typeof child === 'number') {
    return child.toString();
  }
  if (Array.isArray(child)) {
    return child.map(getChildText).join('');
  }
  if (child.props && child.props.children) {
    return getChildText(child.props.children);
  }
  return '';
};

const generateId = (text) => {
  return text
    .replace(/[`*_\\]/g, '') // Strip markdown formatting characters
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
};

export default function Note({ theme, toggleTheme }) {
  const { week } = useParams();
  const currentWeekNum = parseInt(week, 10);
  const weekData = WEEKS_DATA.find((item) => item.week === currentWeekNum);

  const [toc, setToc] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const markdownContent = mdFiles[currentWeekNum] || '# 콘텐츠가 아직 준비되지 않았습니다.\n추후 업데이트 예정입니다.';

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsSidebarOpen(false);

    if (mdFiles[currentWeekNum]) {
      const headings = [];
      const regex = /^(##\s)(.*)/gm;
      let match;
      while ((match = regex.exec(mdFiles[currentWeekNum])) !== null) {
        headings.push(match[2].trim());
      }
      setToc(headings);
    } else {
      setToc([]);
    }
  }, [currentWeekNum]);

  if (!weekData) {
    return <div className="container">Week not found</div>;
  }

  return (
    <div className="note-layout">
      {/* Mobile Header */}
      <div className="mobile-header">
        <button className="menu-toggle-btn" onClick={() => setIsSidebarOpen(true)}>
          <Menu size={20} />
          <span>목차</span>
        </button>
        <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme" style={{ padding: '8px' }}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <Link to="/" className="mobile-home-link">
          Home
        </Link>
      </div>

      {/* Sidebar Backdrop */}
      {isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={() => setIsSidebarOpen(false)} />
      )}

      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        {/* Sidebar Close Button */}
        <button className="sidebar-close-btn" onClick={() => setIsSidebarOpen(false)}>
          <X size={20} />
        </button>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <Link to="/" className="back-link" onClick={() => setIsSidebarOpen(false)} style={{ marginBottom: 0 }}>
            <ChevronLeft size={18} />
            Back to Home
          </Link>
          <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>

        <div className="sidebar-header">
          <div className="sidebar-logo-container">
            <Link to="/">
              <img src={canolaPythonLogo} alt="Canola Python Logo" className="sidebar-logo" />
            </Link>
          </div>
          <span className="sidebar-week-label">WEEK {weekData.week}</span>
          <h2 className="sidebar-title">{weekData.title}</h2>
        </div>

        {toc.length > 0 && (
          <div className="sidebar-section">
            <h3 className="sidebar-section-title">CONTENTS</h3>
            <ul className="sidebar-menu">
              {toc.map((heading, idx) => {
                const targetId = generateId(heading);
                return (
                  <li key={idx} className="sidebar-menu-item">
                    <a
                      href={`#${targetId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setIsSidebarOpen(false); // Close sidebar on mobile
                        const element = document.getElementById(targetId);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {heading}
                    </a>
                  </li>
                );
              })}
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
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar on mobile
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
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              code: CodeBlock,
              h1: ({ node, ...props }) => {
                const headingText = getChildText(props.children);
                const id = generateId(headingText);
                return <h1 id={id} {...props} />;
              },
              h2: ({ node, ...props }) => {
                const headingText = getChildText(props.children);
                const id = generateId(headingText);
                return <h2 id={id} {...props} />;
              },
              a: ({ node, href, children, ...props }) => {
                const isExternal = href?.startsWith('http://') || href?.startsWith('https://');
                return (
                  <a
                    href={href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                    {...props}
                  >
                    {children}
                  </a>
                );
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
