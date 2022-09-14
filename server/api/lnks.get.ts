import { useUnidadeLinks } from "~~/composables/useLinks";

export default defineEventHandler((event) => {
    const query = useQuery(event)

    //return {a: query.index } 

    const lnks = useUnidadeLinks();

    let res = $fetch(lnks[query.index.toString()].link)
    
    return res;
})