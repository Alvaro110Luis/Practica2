import { useState } from "react";
import Tarea from "./Tarea";
import "./contTareas.scss";
import { useDataContext } from "../Context";
function ContTareas() {
  const [cantTareas, setCAntTareas] = useState(0);
  const tar = [];
  const { total, setTotal } = useDataContext();
  for (let i = 0; i <= cantTareas; i++) {
    tar.push(<Tarea key={i}></Tarea>);
  }
  return (
    <article className="contCT">
      <h2>Tareas</h2>
      <button
        onClick={() => {
          setTotal(total + 1);
          setCAntTareas(cantTareas + 1);
        }}
      >
        Añadir Tarea +
      </button>
      <hr></hr>
      <section className="contTareas">{tar}</section>
    </article>
  );
}
export default ContTareas;
