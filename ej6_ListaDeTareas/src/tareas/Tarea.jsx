import { GiCancel } from "react-icons/gi";
import "./tarea.scss";
import { useState } from "react";
import { useDataContext } from "../Context";
function Tarea() {
  const [realizada, setRealizada] = useState(false);
  const [eliminar, setEliminar] = useState(false);
  const { total, setTotal, realizadas, setRealizadas } = useDataContext();
  if (!eliminar) {
    return (
      <article className="contTarea">
        <section className="info">
          <input
            type="checkbox"
            className="check"
            onChange={(e) => {
              if (e.target.checked == false) {
                setRealizadas(realizadas - 1);
                setRealizada(false);
              } else {
                setRealizadas(realizadas + 1);
                setRealizada(true);
              }
            }}
          ></input>
          <input
            type="text"
            placeholder="Nueva Tarea"
            className={`texto ${realizada ? "realizada" : ""}`}
          ></input>
        </section>
        <GiCancel
          onClick={() => {
            if(realizada)setRealizadas(realizadas-1);
            setTotal(total - 1);
            setEliminar(true);
          }}
        ></GiCancel>
      </article>
    );
  } else {
    return <></>;
  }
}
export default Tarea;
