import { mapperWords } from "./mapperWords.js";
export function retornarTipoPalavraMapper(palavra){
    for (const [tipoPalavra, regex] of Object.entries(mapperWords)){
        if(regex.test(palavra)){
            return tipoPalavra;
        }
    }
    throw new Error("Formato de palavra não encontrado para a palavra: " + palavra);
}