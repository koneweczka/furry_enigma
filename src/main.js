import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false

Vue.use(Buefy)

new Vue({
  render: h => h(App),
  store: store,
}).$mount('#app')