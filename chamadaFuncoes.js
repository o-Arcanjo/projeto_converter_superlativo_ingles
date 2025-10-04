import {
    palavrasComFinalCVC, palavrasComFinalE, palavrasComFinalY, palavrasComFinalQualquer} from './exports.js';


export const chamadaFuncoes = {
    palavrasComFinalCVC: (palavra) => palavrasComFinalCVC.transformarPalavra(palavra),
    palavrasComFinalE: (palavra) => palavrasComFinalE.transformarPalavra(palavra),                                    
    palavrasComFinalY: (palavra) => palavrasComFinalY.transformarPalavra(palavra),                                          
    palavrasComFinalQualquer: (palavra) => palavrasComFinalQualquer.transformarPalavra(palavra)
}