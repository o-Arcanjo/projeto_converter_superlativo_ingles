import type { FuncoesPalavras } from "../export/exports";
import { mapperWords } from "../export/exports";

export function retornarTipoPalavraMapper(palavra: string): FuncoesPalavras {
    // Object.entries() retorna [string, RegExp][]
    const entries = Object.entries(mapperWords);
    
    for (const [tipoPalavra, regex] of entries) {
        if ((regex as RegExp).test(palavra)) { // type assertion isolada funciona
            return tipoPalavra as FuncoesPalavras; // type assertion isolada funciona
        }
    }

throw new Error("Tipo Inválido");
}
