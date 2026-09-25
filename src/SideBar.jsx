function SideBar() {
  return (
    <aside className="SideBar">
      <div className="SideBar-top">
        <button className="menu-btn">☰</button>
      </div>
      <nav className="SideBar-nav">
        <button className="nav-item">Menu</button>
        <button className="nav-item">Dashboard</button>
        <button className="nav-item">Tareas</button>
        <button className="nav-item">Settings</button>
      </nav>
    </aside>
  );
}

export default SideBar;