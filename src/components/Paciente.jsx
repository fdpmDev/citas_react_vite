export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

    const {nombre, propietario, email, fecha, sintomas, id} = paciente
    const handleEliminar = () => {
        const respuesta = confirm("Desea eliminar paciente?")

        if(respuesta) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="bg-white mx-5 my-10 px-5 py-10 rounded-xl shadow-md">
            <p className=" text-gray-700 font-bold uppercase mb-3">Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className=" text-gray-700 font-bold uppercase mb-3">Propietario: {''}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className=" text-gray-700 font-bold uppercase mb-3">Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>
            <p className=" text-gray-700 font-bold uppercase mb-3">Fecha Alta: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className=" text-gray-700 font-bold uppercase mb-3">Sintomas: {''}
                <span className="font-normal normal-case">{sintomas}</span>
            </p>

            <div className="mt-10 flex justify-between">
                <button 
                    type="button"
                    className="py-2 px-10 uppercase text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg font-bold"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button>
                <button 
                    type="button"
                    className="py-2 px-10 uppercase text-white bg-red-600 hover:bg-red-700 rounded-lg font-bold"
                    // Llamar una funcion así, espera a que ocurra el evento y se usa cuando esperas realizar algo más
                    onClick={handleEliminar}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}
