import "./App.css";

function Panel() {
  return (
    <aside className="panel-container">
      <div className="panel-search">
        <input type="text" placeholder="Buscar..." className="search-input" />
      </div>
      <div className="panel-details">
        <div className="preview-box"></div>
        <h3>Detalles del Servicio</h3>
        <p>★★★★☆</p>
        <button className="panel-btn">Acción Principal</button>
      </div>
    </aside>
  );
}

export default Panel;