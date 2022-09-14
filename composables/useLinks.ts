export const useUnidadeLinks = () => {
    const lnks = [ 
        { "nome":"hujm-ufmt", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hujm-ufmt" },
        { "nome":"hupaa-ufal", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hupaa-ufal" },
        { "nome":"hugv-ufam", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hugv-ufam" },
        { "nome":"hupes-ufba", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hupes-ufba" },
        { "nome":"mco-ufba", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/mco-ufba" },
        { "nome":"ch-ufc", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/ch-ufc" },
        { "nome":"hujb-ufcg", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hujb-ufcg" },
        { "nome":"hucam-ufes", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hucam-ufes" },
        { "nome":"huap-uff", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/huap-uff" },

        { "nome":"hc-ufg", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hc-ufg" },    
        { "nome":"hu-ufgd", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-ufgd" },
        { "nome":"hu-ufjf", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-ufjf" },
        { "nome":"hu-ufma", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-ufma" },
        { "nome":"hc-ufmg", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hc-ufmg" },
        { "nome":"humap-ufms", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/humap-ufms" },
        { "nome":"hulw-ufpb", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hulw-ufpb" },
        { "nome":"he-ufpel", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/he-ufpel" },
        { "nome":"hu-ufpi", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-ufpi" },

        { "nome":"chc-ufpr", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/chc-ufpr" },
        { "nome":"huol-ufrn", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/huol-ufrn" },    
        { "nome":"hu-furg", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-furg" },
        { "nome":"huab-ufrn", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/huab-ufrn" },
        { "nome":"hu-ufs", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-ufs" },
        { "nome":"hu-ufsc", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-ufsc" },
        { "nome":"hu-ufscar", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-ufscar" },
        { "nome":"husm-ufsm", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/husm-ufsm" },
        { "nome":"hdt-uft", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hdt-uft" },
        { "nome":"hc-uftm", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hc-uftm" },
    
        { "nome":"hub-unb", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hub-unb" },
        { "nome":"hugg-unirio", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hugg-unirio" },    
        { "nome":"hu-univasf", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hu-univasf" },    
        { "nome":"sede", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/sede" },
        { "nome":"hul-ufs", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hul-ufs" },
        { "nome":"hc-ufpe", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/hc-ufpe" },
        { "nome":"mejc-ufrn", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/mejc-ufrn" },
        { "nome":"chu-ufpa", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/chu-ufpa" },
        { "nome":"huac-ufcg", "link":"https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes/huac-ufcg" }
    ]
    return lnks
}