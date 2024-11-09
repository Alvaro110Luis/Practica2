import "./App.scss";
import { DataContextProvider } from "./Context";
import Presentacion from "./presentacion/Presentacion";
import Progreso from "./progreso/Progreso";
import ContTareas from "./tareas/ContTarea";
function App() {
  return (
    <article className="cont">
      <Presentacion></Presentacion>
      <hr></hr>
      <section className="contBody">
        <DataContextProvider>
          <ContTareas></ContTareas>
          <Progreso></Progreso>
        </DataContextProvider>
      </section>
    </article>
  );
}

export default App;
