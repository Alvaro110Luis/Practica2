import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cont1 from "./web1";
import "./App.scss";
import img1 from "./assets/web1.png";
import img2 from "./assets/web2.png";
import img3 from "./assets/web3.png";

function App() {
  return (
    <>
      <h1>Carteles con React</h1>
      <article className="contenedor">
        <Cont1 imgUrl={img1} title="Primero"></Cont1>
        <Cont1 imgUrl={img2} title="Segundo"></Cont1>
        <Cont1 imgUrl={img3} title="Tercero"></Cont1>
      </article>
    </>
  );
}

export default App;
