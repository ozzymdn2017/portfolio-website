import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router/index.js'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'
import aws_exports from './aws-exports'

Amplify.configure(aws_exports)

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
