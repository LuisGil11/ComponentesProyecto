import NavbarMenu from "./components/NavbarMenu";
import caballo1 from "./assets/caballo1.jpg";
import caballo2 from "./assets/caballo2.jpg";
import caballo3 from "./assets/caballo3.jpg";
import CardEjemplar from "./components/CardEjemplar";
import RegisterCard from "./components/RegisterCard";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import RegistrarEjemplar from "./components/RegistrarEjemplar";
import ConsultaEjemplar from "./components/ConsultaEjemplar";
import CrearRol from "./components/CrearRol";
import VerEjemplares from "./components/VerEjemplares";
import CardN from "./components/CardN";
import PagEj from "./components/PagEjemplar/PagEj";
import EditarEj from "./components/PagEjemplar/EditarEj";
import ModalExitoso from "./components/ModalExitoso";
import { Button, Container, Modal, Row } from "react-bootstrap";
import RangoJinete from "./components/RangoJinete";
import CrearImplemento from "./components/Implementos/CrearImplemento";
import CrearMedicamento from "./components/Medicamentos/CrearMedicamento";
import CrearMotivoRetiro from "./components/Retiros/CrearMotivoRetiro";
import CrearPelaje from "./components/Pelaje/CrearPelaje";
import CrearArea from "./components/Area/CrearArea";
import CrearRestaurante from "./components/Restaurantes/CrearRestaurante";
import CrearCuerpoDiferencia from "./components/CuerpoDiferencia/CrearCuerpoDiferencia";
import CrearCategoriaCarrera from "./components/CategoriaCarrera/CrearCategoriaCarrera";
import CrearLugar from "./components/Lugar/CrearLugar";
import { CardMedicamento } from "./components/CardMedImpRetiro";
import { PagMedImpRetiro } from "./components/PagMedImpRetiro";

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
      labial: 54,
      precio: 256000,
      peso: 200,
      hara: "Los altos de Cogedes",
      propietario: "Papito Suarez",
      puesto: "12 (5)",
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

  const Medicamentos = [
    {
      nombre: "Atamel",
      descripcion: "Remedio pa q no le duela el coco al caballo",
      key: 1,
    },
    {
      nombre: "Teragrip",
      descripcion: "Remedio pa los moquitos",
      key: 2,
    },
    {
      nombre: "Atamel",
      descripcion: "Remedio pa q no le duela el coco al caballo",
      key: 3,
    },
    {
      nombre: "Teragrip",
      descripcion: "Remedio pa los moquitos",
      key: 4,
    },
  ];

  const Implementos = [
    {
      nombre: "Gringolas",
      descripcion: "Pa que el caballo no se me distraiga",
      key: 5,
    },
    {
      nombre: "zapatitos",
      descripcion: "pa q no se joda las patas",
      key: 6,
    },
  ];

  const Retiros = [
    {
      nombre: "Se hizo verga",
      descripcion: "Se la mamo el caballo",
      key: 7,
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
      {/* <RegistrarEjemplar /> */}
      {/* <EditarEjemplar ejemplar={Ejemplares} /> */}
      {/* <CrearRol /> */}
      {/* <Row className="row-cols-2 mx-5">
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
        ))} 
      </Row> */}
      {/* <PagEj /> */}
      {/* <EditarEj
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
        tatLabial={Ejemplares[0].labial}
        precio={Ejemplares[0].precio}
        peso={Ejemplares[0].peso}
        propietario={Ejemplares[0].propietario}
        hara={Ejemplares[0].hara}
        puesto={Ejemplares[0].puesto}
      />
      <RangoJinete />
      <CrearImplemento />
      <CrearMedicamento />
      <CrearMotivoRetiro />
      <CrearPelaje />
      <CrearArea />
      <CrearRestaurante />
      <CrearCuerpoDiferencia />
      <CrearCategoriaCarrera />
      <CrearLugar /> */}
      <PagMedImpRetiro items={Medicamentos} titulo={"Medicamentos"} />
      <PagMedImpRetiro items={Implementos} titulo={"Implementos"} />
      <PagMedImpRetiro items={Retiros} titulo={"Retiros"} />
    </div>
  );
}

export default App;
