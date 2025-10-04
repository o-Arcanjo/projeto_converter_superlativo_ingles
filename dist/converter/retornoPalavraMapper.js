"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retornarTipoPalavraMapper = retornarTipoPalavraMapper;
const exports_1 = require("../export/exports");
function retornarTipoPalavraMapper(palavra) {
    for (const [tipoPalavra, regex] of Object.entries(exports_1.mapperWords)) {
        if (regex.test(palavra)) {
            return tipoPalavra;
        }
    }
    throw new Error("Tipo Inválido");
}
