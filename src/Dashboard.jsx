import Header from "./Header";
import Card from "./Card";
import "./App.css";

function Dashboard() {
  return (
    <div className="dashboard">
      {/* 1. Header en la parte superior */}
      <Header />

      {/* 2. Contenedor blanco principal de tarjetas */}
      <div className="cards-container-wrapper">
        <div className="cards-grid">
          
          <Card 
            titulo="UX Research" 
            descripcion="Análisis de usuarios" 
            categoria="Diseño" 
            destacado={true} 
          />

          <Card 
            titulo="UI Layouts" 
            descripcion="Componentes dinámicos" 
            categoria="Frontend" 
            destacado={false} 
          />

          <Card 
            titulo="Design Systems" 
            descripcion="Guía de estilos" 
            categoria="UI" 
            destacado={true} 
          />

          <Card 
            titulo="QA Testing" 
            descripcion="Pruebas de interfaz" 
            categoria="Testing" 
            destacado={false} 
          />
           <Card 
            titulo="Prototipado" 
            descripcion="Flujos de navegacion" 
            categoria="Diseño" 
            destacado={true} 
          />
           <Card 
            titulo="Iconography" 
            descripcion="Sets de íconos vectoriales" 
            categoria="Assets" 
            destacado={false} 
          />

        </div>
      </div>
    </div>
  );
}

export default Dashboard;