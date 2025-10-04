import type { FuncoesPalavras } from "../export/exports";
import { mapperWords } from "../export/exports";

export function retornarTipoPalavraMapper(palavra: string): FuncoesPalavras {
    for (const [tipoPalavra, regex] of Object.entries(mapperWords) as [FuncoesPalavras,RegExp][]) {
        if (regex.test(palavra)) {
            return tipoPalavra; 
        }
    }

throw new Error("Tipo Inválido");
}
