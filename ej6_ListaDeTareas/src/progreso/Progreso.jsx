import { useDataContext } from "../Context";
import "./progreso.scss";
function Progreso() {
    const {total,realizadas}=useDataContext();
  return (
    <article className="contProg">
      <h2>Progreso</h2>
      <ul>
        <li>{realizadas} Finalizado</li>
        <li>{total-realizadas} en Progreso</li>
      </ul>
      <progress value={realizadas} max={total}></progress>
    </article>
  );
}

export default Progreso;