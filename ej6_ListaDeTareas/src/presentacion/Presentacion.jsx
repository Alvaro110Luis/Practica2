import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import "./presentacion.scss";
function Presentacion() {
  return (
    <article className="contPre">
      <FaUserAlt className="iconUser"></FaUserAlt>
      <section>
        <div className="bienvenido">
          <p>Bienvenido!!!</p>
          <MdOutlineWavingHand></MdOutlineWavingHand>
        </div>
        <p><b>Alex Franco</b></p>
      </section>
    </article>
  );
}
export default Presentacion;
