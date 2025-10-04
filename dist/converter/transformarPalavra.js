"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformarPalavra = transformarPalavra;
const exports_1 = require("../export/exports");
function transformarPalavra(tipoPalavra, palavra) {
    if (exports_1.chamadaFuncoes[tipoPalavra]) {
        return exports_1.chamadaFuncoes[tipoPalavra](palavra);
    }
    else {
        console.warn("Operação não suportada");
        return palavra;
    }
}
