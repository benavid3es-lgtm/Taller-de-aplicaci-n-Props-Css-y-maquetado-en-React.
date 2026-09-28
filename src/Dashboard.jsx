import Card from "./Card";
import Header from "./Header";
import "./App.css";

function Dashboard() {
  const servicios = [
    { id: 1, titulo: "UX Research", descripcion: "Análisis de usuarios", categoria: "Diseño", destacado: true },
    { id: 2, titulo: "UI Layouts", descripcion: "Componentes dinámicos", categoria: "Frontend", destacado: false },
    { id: 3, titulo: "Design Systems", descripcion: "Guía de estilos", categoria: "UI", destacado: true },
    { id: 4, titulo: "Prototipado", descripcion: "Flujos de navegación", categoria: "Diseño", destacado: false },
    { id: 5, titulo: "QA Testing", descripcion: "Pruebas de interfaz", categoria: "Testing", destacado: true },
    { id: 6, titulo: "Iconography", descripcion: "Sets de íconos vectoriales", categoria: "Assets", destacado: false }
  ];

  return (
    <main className="dashboard">
      <Header />
      
      {/* Pestañas de filtrado superior */}
      <div className="dashboard-tabs">
        <button className="tab active">Todos</button>
        <button className="tab">Diseño</button>
        <button className="tab">Frontend</button>
        <button className="tab">Recursos</button>
      </div>

      {/* Tarjeta contenedora principal blanca */}
      <div className="cards-container-wrapper">
        <div className="cards-grid">
          <Card
            titulo={servicios[0].titulo}
            descripcion={servicios[0].descripcion}
            categoria={servicios[0].categoria}
            destacado={servicios[0].destacado}
          />
          <Card
            titulo={servicios[1].titulo}
            descripcion={servicios[1].descripcion}
            categoria={servicios[1].categoria}
            destacado={servicios[1].destacado}
          />
          <Card
            titulo={servicios[2].titulo}
            descripcion={servicios[2].descripcion}
            categoria={servicios[2].categoria}
            destacado={servicios[2].destacado}
          />
          <Card
            titulo={servicios[3].titulo}
            descripcion={servicios[3].descripcion}
            categoria={servicios[3].categoria}
            destacado={servicios[3].destacado}
          />
          <Card
            titulo={servicios[4].titulo}
            descripcion={servicios[4].descripcion}
            categoria={servicios[4].categoria}
            destacado={servicios[4].destacado}
          />
          <Card
            titulo={servicios[5].titulo}
            descripcion={servicios[5].descripcion}
            categoria={servicios[5].categoria}
            destacado={servicios[5].destacado}
          />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;