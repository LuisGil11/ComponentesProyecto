import NavbarMenu from "./components/NavbarMenu";
import caballo1 from "./assets/caballo1.jpg";
import caballo2 from "./assets/caballo2.jpg";
import caballo3 from "./assets/caballo3.jpg";
import CardEjemplar from "./components/CardEjemplar";
import RegisterCard from "./components/RegisterCard";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import RegistrarEjemplar from "./components/RegistrarEjemplar";
import EditarEjemplar from "./components/EditarEjemplar";
import ConsultaEjemplar from "./components/ConsultaEjemplar";
import CrearRol from "./components/CrearRol";
import VerEjemplares from "./components/VerEjemplares";
import CardN from "./components/CardN";
import PagEj from "./components/PagEjemplar/PagEj";
import EditarEj from "./components/PagEjemplar/EditarEj";

function App() {
  const Ejemplares = [
    {
      imagen: caballo1,
      nombre: "El burlon",
      numero: 5,
      pelaje: "SuavePa",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
    },
    {
      imagen: caballo2,
      nombre: "EL caballo WHITTEE",
      numero: 7,
      pelaje: "RUlos Chidos",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
    },
    {
      imagen: caballo3,
      nombre: "TIro al blanco",
      numero: 10,
      pelaje: "Blanquito",
      sexo: "M",
      padre: "Luchito",
      madre: "teresita",
      stud: "los toros del hood ",
      fecha_nac: "20/03/04",
      entrenador: "Pablo el matao Paez",
      mejorPos: 2,
      cantidad2do: 23,
      ganancia: 200,
    },
  ];

  return (
    <div>
      {/* <NavbarMenu />
      <Login />
      <RegisterCard />
      <SearchBar /> */}
      {/* <VerEjemplares ejemplares={Ejemplares} id="ejemplares" /> */}
      {/* <CardEjemplar ejemplares={Ejemplares} id="ejemplares" /> */}
      <RegistrarEjemplar />
      {/* <EditarEjemplar ejemplar={Ejemplares} /> */}
      {/* <CrearRol />
      {Ejemplares.map((ejemplar) => (
        <CardN
          key={ejemplar.nombre}
          imagen={ejemplar.imagen}
          nombre={ejemplar.nombre}
          numero={ejemplar.numero}
          pelaje={ejemplar.pelaje}
          sexo={ejemplar.sexo}
          padre={ejemplar.padre}
          madre={ejemplar.madre}
          stud={ejemplar.stud}
          fecha_nac={ejemplar.fecha_nac}
          entrenador={ejemplar.entrenador}
          mejorPos={ejemplar.mejorPos}
          cantidad2do={ejemplar.cantidad2do}
          ganancia={ejemplar.ganancia}
        />
      ))} */}
      {/* <PagEj /> */}
      <EditarEj
        key={Ejemplares[0].nombre}
        imagen={Ejemplares[0].imagen}
        nombre={Ejemplares[0].nombre}
        numero={Ejemplares[0].numero}
        pelaje={Ejemplares[0].pelaje}
        sexo={Ejemplares[0].sexo}
        padre={Ejemplares[0].padre}
        madre={Ejemplares[0].madre}
        stud={Ejemplares[0].stud}
        fecha_nac={Ejemplares[0].fecha_nac}
        entrenador={Ejemplares[0].entrenador}
        mejorPos={Ejemplares[0].mejorPos}
        cantidad2do={Ejemplares[0].cantidad2do}
        ganancia={Ejemplares[0].ganancia}
      />
    </div>
  );
}

export default App;
