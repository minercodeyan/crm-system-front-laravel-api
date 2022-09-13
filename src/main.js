import { createApp } from 'vue'
import App from './App.vue'
import {createVuetify} from "vuetify";
import { loadFonts } from './plugins/webfontloader'
import router from "@/router";
import * as vComponents from 'vuetify/components'
import * as directives from 'vuetify/directives'
import components from '@/components'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

loadFonts()

const app = createApp(App)


const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
    vComponents,
    directives,
})

components.forEach(component=>{
    app.component(component.name,component)
})


app.use(vuetify).use(router)
  .mount('#app')
