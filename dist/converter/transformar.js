"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformar = transformar;
const exports_1 = require("../export/exports");
function transformar(palavra) {
    try {
        return (0, exports_1.transformarPalavra)((0, exports_1.retornarTipoPalavraMapper)(palavra), palavra);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Erro ao transformar a palavra:", error.message);
        }
        else {
            console.error("Erro desconhecido ao transformar a palavra:", error);
        }
        return palavra;
    }
}
