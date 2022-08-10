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
    <a href="/pag01">Pagina 01</a>- - 
    <a href="/pag02">Pagina 02</a>- - 
    <a href="/pag03">Pagina 03</a>- - 
    <a href="/pag04">Pagina 04</a>
    
  </div>
</template>
<script setup>
  
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