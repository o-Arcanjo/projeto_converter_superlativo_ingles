export const palavrasComFinalCVC = {
    transformarPalavra: (palavra : string) => {
        return palavra + palavra[palavra.length - 1] + "er";
    }
}

