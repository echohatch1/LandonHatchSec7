import '@babel/polyfill'
import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
