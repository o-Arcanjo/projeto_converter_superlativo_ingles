import { config } from "dotenv";
import {transformar} from "./export/exports";
config();
(() => {
    const palavra = process.env.PALAVRA_INGLES_SUPERLATIVO;
    if (!palavra) {
        throw new Error("A variável de ambiente PALAVRA_INGLES_SUPERLATIVO não está definida!");
    }
const resultado : string = transformar(palavra);
console.log(resultado);
})()


