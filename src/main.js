import 'sass/app.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import GlobalComponentInstaller from './components/global'

Vue.config.productionTip = false

GlobalComponentInstaller(Vue)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
