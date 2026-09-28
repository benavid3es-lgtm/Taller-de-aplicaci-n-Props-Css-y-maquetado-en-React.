import "./App.css";

function Card(props) {
  
  return (
    <div className="card">
      <div className="card-img-container">
        
      </div>
      <div className="card-body">
        {props.destacado && <span className="badge">⭐Destacado</span>}

        <h3 className="card-title">{props.titulo}</h3>
        <p className="card-desc">{props.descripcion}</p>
        <span className="card-badge">{props.categoria}</span>
      </div>
    </div>
  );
}

export default Card;