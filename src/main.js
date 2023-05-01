import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import Map from './components/Map.vue'
import Earth from './components/Earth.vue'
import Building from './components/Building.vue'
import Test from './components/test.vue'
import Index from './components/index.vue'
Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    {path: '/', component: Index},
    {path: '/earth', component: Earth},
    {path: '/map', component: Map},
    {path: '/building', component: Building},
    {path:'/test',component:Test}
]
const router = new VueRouter({
    routes
})
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
