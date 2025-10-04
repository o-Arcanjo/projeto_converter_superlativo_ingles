import {
    transformarPalavra,
    retornarTipoPalavraMapper} from '../export/exports';


export function transformar (palavra: string) : string {
    try{
        return transformarPalavra(retornarTipoPalavraMapper(palavra), palavra);
    }catch(error : unknown){
        if (error instanceof Error) {
            console.error("Erro ao transformar a palavra:", error.message);
        } else {
            console.error("Erro desconhecido ao transformar a palavra:", error);
        }
        return palavra;
    }
}