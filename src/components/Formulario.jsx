import { useState, useEffect } from 'react';
import { Error } from './Error';

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  // Escuchar por los cambios de un elemento cuando este suceda
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }

    // Re-renderizara una vez que cambie el estado especificado, si no creara un loop
  }, [paciente]);

  const generarID = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)
    return (fecha + random)
  }

  // Se pueden asociar un evento a una funcion o en una sola linea 
  const handleSubmit = (e) => {
    e.preventDefault()
    // Validacion Formulario
    // includes consulta si contiene cierto caracter o cadena dentro de las variables, en este caso si no son vacios
    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      console.log('Hay al menos un campo vacio')
      setError(true)
    } else {
      setError(false)

      // Objeto de Paciente
      const objetoPaciente = {
        nombre,
        propietario,
        email,
        fecha,
        sintomas,
      }

      if(paciente.id) {
        // Editando el registro
        objetoPaciente.id=paciente.id
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        // Se actualizan todos los pacientes y se limpia el estado tomado del paciente
        setPaciente({})

      }else{
        // Nuevo Registro
        objetoPaciente.id = generarID()
        // Buena practica, copiar y agregar a un nuevo arreglo sin alterar el previo, con spreedOperator
        setPacientes([...pacientes, objetoPaciente]);
      }

      // Reiniciar Formulario
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setSintomas('')
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pingüinos</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pingüinos y {''}
        <span className="text-blue-600 font-bold">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >

        {/* && Si error es true ocurre lo siguiente directamente*/}
        {error && (
          <Error>
            <p>Todos los Campos son Obligatorios</p>
          </Error>
        )}

        <div className="mt-5">
          {/* El htmlFor === for en React y tiene que tener el mismo id del elemento que hace referencia */}
          <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
            Nombre Mascota
          </label>
          <input
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-red-600 rounded-lg"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
            Nombre Propietario
          </label>
          <input
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-red-600 rounded-lg"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email"
            className="border-2 w-full p-2 mt-2 placeholder-red-600 rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
            Alta
          </label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 text-red-600 placeholder-red-600 rounded-lg"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
            Sintomas
          </label>
          <textarea
            id="sintomas"
            type="text"
            placeholder="Describe los Sintomas"
            className="border-2 w-full p-2 mt-2 text-red-600 placeholder-red-600 rounded-lg"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

          <input
            type="submit"
            className="bg-indigo-600 w-full text-white font-bold uppercase 
              p-3 mt-3 hover:bg-indigo-700 cursor-pointer transition-colors"
            value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
          />
      </form>
    </div>
  )
}
