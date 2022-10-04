// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app:{
        head:{
            script:[
                {
                    src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7491649292131125",
                    async: true,
                    crossorigin: "anonymous"
                }
            ]
        }
    }
})