import { Link } from 'react-router-dom';

function Header({ darkMode, toggleDarkMode }) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center' }}>
      <Link to="/">Főoldal</Link>
      <Link to="/courses" style={{ marginLeft: '1rem' }}>Kurzusok</Link>
      <button 
        onClick={toggleDarkMode} 
        style={{
          marginLeft: 'auto',
          backgroundColor: 'transparent',
          border: '1px solid white',
          color: 'white',
          padding: '0.3rem 0.8rem',
          cursor: 'pointer',
          borderRadius: '4px'
        }}
      >
        {darkMode ? 'Világos mód' : 'Sötét mód'}
      </button>
    </nav>
  );
}

export default Header;
