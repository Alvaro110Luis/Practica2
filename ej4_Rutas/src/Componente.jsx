import { useEffect, useState } from "react";
import "./Componente.scss";
import { FaStar } from "react-icons/fa6";

function Comp(props) {
  const [estrellas, setEstrellas] = useState(0);
  const str = [];
  for (let i = 0; i < estrellas; i++)
    str.push(<FaStar key={i} className="estrella"></FaStar>);
  return (
    <section className="cont">
      <h2>Componente {props.nro}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias delectus
        laboriosam quia dolorem facere, natus eum quaerat corporis iusto quos
        tempore cupiditate sed magni inventore ea unde illo vero maiores! Lorem
        ipsum, dolor sit amet consectetur adipisicing elit. Delectus aspernatur
        distinctio quaerat eaque, sit tempora nam, quis vero vitae quidem eius
        eligendi officiis molestiae dolorem quia. Totam culpa inventore
        perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Itaque magni optio corporis iste neque distinctio iusto suscipit
        necessitatibus. Quasi magnam laboriosam provident repellendus aperiam
        assumenda error laborum maxime similique accusamus?
      </p>
      <div>{str}</div>
      <button
        onClick={() => {
          setEstrellas(estrellas + 1);
          if (estrellas >= 5) setEstrellas(0);
        }}
      >
        Calificar
      </button>
    </section>
  );
}
export default Comp;
