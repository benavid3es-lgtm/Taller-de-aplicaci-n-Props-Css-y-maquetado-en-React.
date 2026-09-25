import "./App.css";

function Card({ titulo, descripcion, categoria, destacado }) {
  return (
    <div className="card">
      <div className="card-img-container">
        
      </div>
      <div className="card-body">
        <h3 className="card-title">{titulo}</h3>
        <p className="card-desc">{descripcion}</p>
        <span className="card-badge">{categoria}</span>
      </div>
    </div>
  );
}

export default Card;