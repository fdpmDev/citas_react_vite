import { useState, useEffect } from 'react';
import Header from './components/Header';
import {Formulario} from './components/Formulario';
// Si son funciones constantes deben importarse con {}
import { ListadoPacientes } from './components/ListadoPacientes';

// JSX = Js Syntax Extension - Lenguaje template que muestra HTML a traves de funciones JS
function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  
  // useEffect para tomar lo del LStorage y setear el arreglo de pacientes
  useEffect(() => {
      // Los useEffects sin parametros de escucha, se ejecutan cuando el componente esta listo y en el orden en cascada
    const obtenerLS = () => {
      // Si no hay nada en localStorage, agrega un arreglo vacio
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLS)
    }
    obtenerLS();
  }, [])

  // localStorage no guarda arreglos, solo Strings, por lo que hay que transformarlos
  useEffect (() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = (id) => {
    // filter no muta el arreglo original, y saca un elemento del arreglo
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }
  
  // const imprime2mas2 = () => {
  //   console.log(2+2)
  // }

  // La funcion hijo puede enviar argumentos hacia esta funcion
  // const toma1Valor = (valor) => {
  //   console.log(valor)
  // }
  // Antes del return pueden haber funciones y/o validaciones
  // Dentro del return se deben colocar expresiones regulares{} y ternarios ?: para incluir JS 
  // Todo componente debe tener return y debe serun solo elemento a nivel maximo
  return (
    // Este div es considerado un solo elemento en el nivel más alto, si lo elimino, 
    // quedaran más elementos dispersos y no es permitido
    // Tambien es posible retornar un Fragment <></> sin añadir html por que si
    <div className="container mx-auto mt-20">
      <Header 
        // numeros={ 1 }
        // isAdmin={false}
        // toma1Valor={toma1Valor}
        // funcion={imprime2mas2}
      />
      <div className="mt-12 md:flex">
        {/* orden buena practica */}
        <Formulario pacientes={pacientes} setPacientes={setPacientes} paciente={paciente} setPaciente={setPaciente}/>
        <ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente} />
      </div>
      
    </div>
  )
}

export default App
