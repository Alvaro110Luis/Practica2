import "./Cont1.scss";
function Cont1(props) {
  return (
    <article className="cont">
      <img src={props.imgUrl} />
      <section className="texto">
        <h2>Web {props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          ipsum perspiciatis maxime distinctio neque. Expedita consequatur quia
          mollitia quaerat tempora et saepe doloremque, minus dolorem repellat.
          Optio asperiores nam ad?
        </p>
        <button className="boton">Ir a la pagina</button>
      </section>
    </article>
  );
}
export default Cont1;
