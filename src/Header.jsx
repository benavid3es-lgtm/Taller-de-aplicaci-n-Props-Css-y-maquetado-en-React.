import "./App.css";

function Header() {
  return (
    <header className="header-container">
      <h2 className="header-title">UI Design</h2>
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Buscar..." 
          className="search-input" 
        />
      </div>
    </header>
  );
}

export default Header;