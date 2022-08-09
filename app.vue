<template>
  <div>
    <h1>Convocações EBSERH:</h1>
    <br/>
    <button @click="getLinkUnidades">LINKS DAS UNIDADES</button>

    <h1>Links de Convocações:</h1>
    Total de links: {{links.length}}
    <ul>
      <li v-for="(link,index) in links" :key="index">{{link}}</li>
    </ul>
    

    <h1>Últimas Atualizações de cada unidade:</h1>
    <button @click="delayGetEditais()">Visualizar Editais</button>
    
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
  import linksDt from './links.json';
  
  var links = ref([]);
  var cards = '';
  
  const unids = reactive({
    u:[]
  });
  var linksFiliais = reactive({u:[]});
  var linksUpdated = reactive({u:[]});
  

  const {data:unidades, pending, error, refresh} = await useAsyncData('convocacoes', 
      () => $fetch('https://www.gov.br/ebserh/pt-br/acesso-a-informacao/agentes-publicos/concursos-e-selecoes/concursos/2019/concurso-no-1-2019-nacional/convocacoes',{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )

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
  unids.u[9] = await useAsyncData('convocacoes9', 
    () => $fetch(linksDt[9].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[10] = await useAsyncData('convocacoes10', 
    () => $fetch(linksDt[10].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[11] = await useAsyncData('convocacoes11', 
    () => $fetch(linksDt[11].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[12] = await useAsyncData('convocacoes12', 
    () => $fetch(linksDt[12].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[13] = await useAsyncData('convocacoes13', 
    () => $fetch(linksDt[13].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[14] = await useAsyncData('convocacoes14', 
    () => $fetch(linksDt[14].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[15] = await useAsyncData('convocacoes15', 
    () => $fetch(linksDt[15].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[16] = await useAsyncData('convocacoes16', 
    () => $fetch(linksDt[16].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[17] = await useAsyncData('convocacoes17', 
    () => $fetch(linksDt[17].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[18] = await useAsyncData('convocacoes18', 
    () => $fetch(linksDt[18].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[19] = await useAsyncData('convocacoes19', 
    () => $fetch(linksDt[19].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[20] = await useAsyncData('convocacoes20', 
    () => $fetch(linksDt[20].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[21] = await useAsyncData('convocacoes21', 
    () => $fetch(linksDt[21].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[22] = await useAsyncData('convocacoes22', 
    () => $fetch(linksDt[22].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[23] = await useAsyncData('convocacoes23', 
    () => $fetch(linksDt[23].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[24] = await useAsyncData('convocacoes24', 
    () => $fetch(linksDt[24].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[25] = await useAsyncData('convocacoes25', 
    () => $fetch(linksDt[25].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[26] = await useAsyncData('convocacoes26', 
    () => $fetch(linksDt[26].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[27] = await useAsyncData('convocacoes27', 
    () => $fetch(linksDt[27].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[28] = await useAsyncData('convocacoes28', 
    () => $fetch(linksDt[28].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[29] = await useAsyncData('convocacoes29', 
    () => $fetch(linksDt[29].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[30] = await useAsyncData('convocacoes30', 
    () => $fetch(linksDt[30].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[31] = await useAsyncData('convocacoes31', 
    () => $fetch(linksDt[31].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[32] = await useAsyncData('convocacoes32', 
    () => $fetch(linksDt[32].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[33] = await useAsyncData('convocacoes33', 
    () => $fetch(linksDt[33].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[34] = await useAsyncData('convocacoes34', 
    () => $fetch(linksDt[34].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[35] = await useAsyncData('convocacoes35', 
    () => $fetch(linksDt[35].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  unids.u[36] = await useAsyncData('convocacoes36', 
    () => $fetch(linksDt[36].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  )
  


//chamada dinamica dos itens não funciona (error: has been blocked by CORS policy)
  // async function getFilial(index){
  //   var tam = linksDt.length;
  //   var i = index;

  //   console.log('getFilial', i);
  //   unids.u[i] = await useAsyncData('filiais'+i,
  //       () => $fetch(linksDt[i].link,{ mode: 'cors', credentials: "include", headers: { 'Access-Control-Allow-Origin':'*' } })
  //   );
    
  //   i++;

  //   if(i < tam){
  //     setTimeout(() => getFilial(i), 2000);
  //   }
  // }

  // onMounted( () => getFilial(0) );
  
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

  async function getLinkUnidades() {
    console.log('links das unidades', unidades.value.length)
    var start = unidades.value.indexOf('govbr-cards')+60;
    var end = unidades.value.indexOf('"viewlet-below-content"');
    cards = unidades.value.slice( start, end );

    links.value = cards.match(/https?:\/\/\S+\S["]/gi);

    links.value.forEach( (element,index) => {
        console.log(element, index)
        links.value[index] = element.slice(0,element.length-1);
    });

  }

</script>
<style scoped>

  .edital-rows{
    display: flex;
  }
</style>