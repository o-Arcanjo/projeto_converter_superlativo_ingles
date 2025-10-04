    import {
        transformarPalavra,
        retornarTipoPalavraMapper} from './exports.js';

    try{
        let palavra = "cast";
        let resultado = transformarPalavra(retornarTipoPalavraMapper(palavra), palavra);
        console.log(resultado);
    }catch(error){
        console.error("error " + error.message);
    }
