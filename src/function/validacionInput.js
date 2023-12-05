
export  function validarNombreInput(nombre) {
    const formatoValido = /^[A-Za-z\s\-']+$/;
    return formatoValido.test(nombre);
}
export  function validarEmailInput(email) {
    const emailRegex = /^\S+@\S+\.\S+$/
    return emailRegex.test(email)
}
export  function validarInputNumerico(numero) {
    const soloNumeros = /^[0-9]+$/;
    return soloNumeros.test(numero);
}


