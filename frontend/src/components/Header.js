import { Link } from 'react-router-dom';

function Header({ darkMode, toggleDarkMode }) {
  /*return (
    <nav>
      <Link to="/">Főoldal</Link>
      <Link to="/courses" style={{ marginLeft: '1rem' }}>Kurzusok</Link>
      <button 
        className="dark-mode-toggle"
        onClick={toggleDarkMode} 
      >
        {darkMode ? 'Világos mód' : 'Sötét mód'}
      </button>
    </nav>
  );*/

  return (
    <header className="site-header">
      <div className="header-top">
        <h1 className="site-title">Turul Akadémia</h1>
      </div>
      <nav className="site-nav">
        <Link to="/">Főoldal</Link>
        <Link to="/courses">Kurzusok</Link>
        <button 
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Világos mód' : 'Sötét mód'}
        </button>
      </nav>
    </header>
  );
}

export default Header;
