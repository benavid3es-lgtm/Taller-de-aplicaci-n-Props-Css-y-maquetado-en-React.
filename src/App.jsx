import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Panel from "./Panel";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <Dashboard />
      <Panel />
    </div>
  );
}

export default App;