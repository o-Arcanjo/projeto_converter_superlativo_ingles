import { chamadaFuncoes} from "../export/exports";
import {type FuncoesPalavras} from "../export/exports";

export function transformarPalavra(tipoPalavra : FuncoesPalavras, palavra : string):string{
    if(chamadaFuncoes[tipoPalavra]){
       return chamadaFuncoes[tipoPalavra](palavra);
    }else{
        console.warn("Operação não suportada");
        return palavra;
    }
}