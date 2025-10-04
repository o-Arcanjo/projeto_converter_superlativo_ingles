import {
    palavrasComFinalCVC, palavrasComFinalE, palavrasComFinalY, palavrasComFinalQualquer} from '../export/exports';


export const chamadaFuncoes = {
    palavrasComFinalCVC: (palavra : string) => palavrasComFinalCVC.transformarPalavra(palavra) ,
    palavrasComFinalE: (palavra : string) => palavrasComFinalE.transformarPalavra(palavra),                                    
    palavrasComFinalY: (palavra : string) => palavrasComFinalY.transformarPalavra(palavra),                                          
    palavrasComFinalQualquer: (palavra : string) => palavrasComFinalQualquer.transformarPalavra(palavra)
}