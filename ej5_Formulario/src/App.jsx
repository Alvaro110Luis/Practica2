import "./App.scss";
import { useForm } from "react-hook-form";
import { FaHouse } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <article>
      <form
        className="contForm"
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h1>REGISTRO</h1>
        <label>Nombre:</label>
        <div className="contSpace">
          <input
            type="text" 
            {...register("nombre", {
              required: {
                value: true,
                message: "Espacio Vacio",
              },
            })}
          ></input>
          <FaHouse color="orange" className="icono"></FaHouse>
        </div>
        {errors.nombre && (
          <span className="error">{errors.nombre.message}</span>
        )}
        <label>Fecha de Nacimiento:</label>
        <div className="contSpace">
          <input
            type="date" 
            {...register("fechaNac", {
              required: {
                value: true,
                message: "Campo vacio",
              },
              validate: (value) => {
                const edad =
                  new Date().getFullYear() - new Date(value).getFullYear();
                return edad >= 18 || "Debe ser mayor de edad";
              },
            })}
          ></input>
          <FaStar color="yellow" className="icono"></FaStar>
        </div>
        {errors.fechaNac && (
          <span className="error">{errors.fechaNac.message}</span>
        )}
        <label>Nota:</label>
        <div className="contSpace">
          <input
            type="number" 
            {...register("nota", {
              required: {
                value: true,
                message: "Campo vacio",
              },
              max: {
                value: 100,
                message: "Paso el limite",
              },
              min: {
                value: 0,
                message: "Muy menor",
              },
            })}
          ></input>
          <FaClipboardList className="icono" color="gray"></FaClipboardList>
        </div>
        {errors.nota && <span className="error">{errors.nota.message}</span>}
        <label></label>
        <input type="submit" className="boton"></input>
      </form>
    </article>
  );
}

export default App;
