import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
//FontAwesome import
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas)
library.add(fab)


createApp(App)
.component('fa', FontAwesomeIcon)
.component('fab', FontAwesomeIcon)
.use(router)
.mount('#app')
