import { config } from "dotenv";
import {transformar} from "./export/exports";
config();
(() => {
    const palavra = process.env.PALAVRA_INGLES_SUPERLATIVO;
    if (!palavra) {
        console.error("A variável de ambiente PALAVRA_INGLES_SUPERLATIVO não está definida!");
    }
const resultado: string = palavra ? transformar(palavra) : "Valor inválido";
console.log(resultado);
})()


