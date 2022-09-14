<template>
    <div>
        <h1 class="text-center">Visualizar os 4 últimos Editais de cada Unidade</h1>
        <button class="text-center" @click="getLinks"> Obter Editais  </button>
        <div>
            <h1>editais</h1>
            <div v-for="(x,index) in lnks" :key="index" >
                <h3>{{lnks[index].nome}}</h3>
                <div v-for="n in 4" :key="n" class="edital-rows" >
                    <div v-if="editaisLink[index]" v-html="editaisLink[index][n-1]" ></div>
                    <div v-if="editaisData[index]" v-html="editaisData[index][n-1]" ></div>
                </div>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
    //testes 
    const idx = ref(0);
    const editaisLink = ref([]);
    const editaisData = ref([]);
    const res = ref();

    const lnks = useUnidadeLinks()

    const max = lnks.length-1;

    const getLinks = async () => {
        setTimeout( async () => {
            res.value = await $fetch(`/api/lnks?index=${idx.value}`)
            getEditais1();
        }, 2000)
    }

    async function getEditais1() {        
        var start = -1;
        var end = -1;
        var entries = '';

        start = res.value.indexOf('content-core');
        end = res.value.indexOf('"paginacao listingBar');

        entries = res.value.slice( start, end );

        editaisLink.value[idx.value] = entries.match(/\<a(.*?)\<\/a\>/gi);
        editaisData.value[idx.value] = entries.match(/\<span class=\"documentByLine\"\>[^\\n]*(.*)\<\/span\>/gi);
        
        //buscar uma nova unidade de convocação
        idx.value++;
        if(idx.value <= max){
            getLinks()
        }

    }


</script>

<style scoped>
    .text-center{
        text-align: center;
    }
    .edital-rows{
        display: flex;
      }
</style>