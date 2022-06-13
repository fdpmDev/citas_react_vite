import { Paciente } from "./Paciente"
// import { useEffect } from "react"

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
    // useEffect(() => {
    //     if(pacientes&&pacientes.length>0){
    //         console.log('Nuevo Paciente Agregado')
    //     }
    // }, [pacientes])

    return (
        // TCSS todos los mediaQueries con ":"
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {/* 0=false - 1=true */}
            {pacientes && pacientes.length 
            ? (
                <>
                    <h2 className="font-black text-3xl text-center ">Listado Pacientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">
                        Administra tus {''}
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {pacientes.map(paciente =>
                        // Si no haces una operacion previa al return puede eliminarse junto con las llaves
                        <Paciente key={paciente.id} paciente={paciente} setPaciente={setPaciente} eliminarPaciente={eliminarPaciente}/>
                    )}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center ">No hay pacientes</h2>
                    <p className="text-lg mt-5 mb-10 text-center">
                        Comienza Agregando Pacientes {''}
                        <span className="text-indigo-600 font-bold">y aparecerán en esta sección</span>
                    </p>
                </>
            )}


        </div>
    )
}
