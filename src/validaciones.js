
export const validarTitulo = (titulo) => {
    const length = titulo.length ;
    if (length >= 8 && length < 25) {
        return true;
    }else{
        return false;
    }
}

export const validarVacio = (url) => {
    if (url === "" || url === undefined) {
        return false
      } else {
        return true
      }
}


export const validarDescripcion = (descripcion) => {
    const length = descripcion.length ;
    if (length >= 20 && length < 100) {
        return true;
    }else{
        return false;
    }
}
export const validarCodigo = (codigo) => {
    const length = codigo.length ;
    var alfan = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/
    if (alfan.test(codigo) && length>=8 && length<=20) {
        return true;
    }else{
        return false;
    }
}

