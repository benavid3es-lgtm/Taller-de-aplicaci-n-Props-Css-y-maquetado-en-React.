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
          {servicios.map((item) => (
            <Card
              key={item.id}
              titulo={item.titulo}
              descripcion={item.descripcion}
              categoria={item.categoria}
              destacado={item.destacado}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Dashboard;