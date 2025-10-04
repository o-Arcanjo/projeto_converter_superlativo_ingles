import { chamadaFuncoes } from "./exports.js";
export function transformarPalavra(tipoPalavra, palavra){
    if(chamadaFuncoes[tipoPalavra]){
       return chamadaFuncoes[tipoPalavra](palavra);
    }else{
        console.log("Operação não suportada")
    }
}