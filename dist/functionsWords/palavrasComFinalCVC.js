"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palavrasComFinalCVC = void 0;
exports.palavrasComFinalCVC = {
    transformarPalavra: (palavra) => {
        return palavra + palavra[palavra.length - 1] + "er";
    }
};
