"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chamadaFuncoes = void 0;
const exports_1 = require("../export/exports");
exports.chamadaFuncoes = {
    palavrasComFinalCVC: (palavra) => exports_1.palavrasComFinalCVC.transformarPalavra(palavra),
    palavrasComFinalE: (palavra) => exports_1.palavrasComFinalE.transformarPalavra(palavra),
    palavrasComFinalY: (palavra) => exports_1.palavrasComFinalY.transformarPalavra(palavra),
    palavrasComFinalQualquer: (palavra) => exports_1.palavrasComFinalQualquer.transformarPalavra(palavra)
};
