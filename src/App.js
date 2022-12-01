import NavbarMenu from "./components/NavbarMenu";
import caballo1 from './assets/caballo1.jpg'
import caballo2 from './assets/caballo2.jpg'
import caballo3 from './assets/caballo3.jpg'
import CardEjemplar from "./components/CardEjemplar";
import RegisterCard from "./components/RegisterCard";
import Login from "./components/Login";
import SearchBar from "./components/SearchBar";
import RegistrarEjemplar from "./components/RegistrarEjemplar";
import ConsultaEjemplar from "./components/ConsultaEjemplar";

function App() {

  const Ejemplares = [
    {
      imagen: caballo1,
      nombre: "El burlon",
      numero: 5,
      pelaje: "SuavePa",
      sexo: "M",
      padre: 'Luchito',
      madre: 'teresita',
      stud: 'los toros del hood ',
      fecha_nac: '20/03/04'
    },
    {
      imagen: caballo2,
      nombre: "EL caballo WHITTEE",
      numero: 7,
      pelaje: "RUlos Chidos",
      sexo: "M",
    },
    {
      imagen: caballo3,
      nombre: "TIro al blanco",
      numero: 10,
      pelaje: "Blanquito",
      sexo: "M",
    },
  ];

  return (
    <div>
      <NavbarMenu/>
      <Login/>
       <RegisterCard/>
       <SearchBar/>
      <CardEjemplar ejemplares={Ejemplares} id='ejemplares'/>
      <RegistrarEjemplar/>
      <ConsultaEjemplar ejemplar = {Ejemplares}/>
    </div>
  );
}

export default App;
