"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const exports_1 = require("./export/exports");
(0, dotenv_1.config)();
(() => {
    const palavra = process.env.PALAVRA_INGLES_SUPERLATIVO;
    if (!palavra) {
        console.error("A variável de ambiente PALAVRA_INGLES_SUPERLATIVO não está definida!");
    }
    const resultado = palavra ? (0, exports_1.transformar)(palavra) : "Valor inválido";
    console.log(resultado);
})();
