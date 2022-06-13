// Siempre se accederan a las propiedades mediante la palabra reservada "props"
// Tambien puedo traer propiedades especificas por destructuring es decir "function Header({nombre}) {}"
// function Header({numeros, isAdmin, toma1Valor}) {
function Header() {
    // console.log(numeros, isAdmin)
    // // Si importo funciones atraves de las props, puedo llamarlas desde este nivel de nodo hijo, y enviar argumentos de esta manera
    // const variableParaPadre = true;
    // toma1Valor(variableParaPadre);
    return (
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimientos Pacientes {""} Con Github {""}
                <span className="text-indigo-600">Veterinaria</span>
            </h1>
        </>
    )
}

export default Header;