<template>
  <div>
    <h1>Convocações EBSERH:</h1>    
    <a href="/">Voltar para home</a>
    <br/>
    <h1>Últimas Atualizações de cada unidade:</h1>
    <a href="/pag01">Pagina 01</a>- - 
    <a href="/pag02">Pagina 02</a>- - 
    <a href="/pag03">Pagina 03</a>- - 
    <a href="/pag04">Pagina 04</a>

    <br/>
    <br/>
    <button @click="delayGetEditais()">Visualizar Editais</button>
    <br/>    
    <br/>    
    <div v-for="i in linksDt.length" :key="i" >
        {{linksDt[i-1].nome}}
        <div style="margin:15px; padding: 10px; background-color: #eee" class="unidade-bloco">
          <div v-for="n in 4" :key="n" class="edital-rows" >
            <div v-if="linksFiliais.u[i-1]" v-html="linksFiliais.u[i-1][n-1]" ></div> 
            <div v-if="linksUpdated.u[i-1]" v-html="linksUpdated.u[i-1][n-1]" ></div> 
          </div>    
        </div>
    </div>  
  </div>
</template>
<script setup>
  const linksDt = [ 
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
];
  
  const unids = reactive({
    u:[]
  });
  var linksFiliais = reactive({u:[]});
  var linksUpdated = reactive({u:[]});
  
  //buscar unidades manualmente
  unids.u[0] = await useAsyncData('convocacoes0', 
    () => $fetch(linksDt[0].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[1] = await useAsyncData('convocacoes1', 
    () => $fetch(linksDt[1].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[2] = await useAsyncData('convocacoes2', 
    () => $fetch(linksDt[2].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[3] = await useAsyncData('convocacoes3', 
    () => $fetch(linksDt[3].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[4] = await useAsyncData('convocacoes4', 
    () => $fetch(linksDt[4].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[5] = await useAsyncData('convocacoes5', 
    () => $fetch(linksDt[5].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[6] = await useAsyncData('convocacoes6', 
    () => $fetch(linksDt[6].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[7] = await useAsyncData('convocacoes7', 
    () => $fetch(linksDt[7].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[8] = await useAsyncData('convocacoes8', 
    () => $fetch(linksDt[8].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  
  const delayGetEditais = () =>{
    alert('Aguarde o carregamento dos editais');
    setTimeout(() => getEditais(), 2000);
  }

  async function getEditais() {
    //console.log('links das unidades', unids.u[unid].data)
    var start = -1;
    var end = -1;
    var entries = '';

    var tam = unids.u.length;
    console.log('tam', tam);
    for(var i=0; i<tam;i++){
      console.log('unids ', i);
      start = unids.u[i].data.indexOf('content-core');
      end = unids.u[i].data.indexOf('"paginacao listingBar');

      entries = unids.u[i].data.slice( start, end );

      linksFiliais.u[i] = entries.match(/\<a(.*?)\<\/a\>/gi);
      linksUpdated.u[i] = entries.match(/\<span class=\"documentByLine\"\>[^\\n]*(.*)\<\/span\>/gi);
    }

  }

</script>
<style scoped>

  .edital-rows{
    display: flex;
  }
</style>