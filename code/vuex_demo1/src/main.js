import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueRouter from 'vue-router'
import Antd from 'ant-design-vue'
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.use(Antd)
store.dispatch('getList')
store.dispatch('getList2')

new Vue({
    router,
    store,

    render: h => h(App)
}).$mount('#app')