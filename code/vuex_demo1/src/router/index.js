import VueRouter from 'vue-router'
import Home from '../views/Home'
import bowen1 from '../views/bowen1'

import newbowen from '../views/newbowen'
import changebowen from '../components/changebowen'
import register from '../views/register'
import log from '../views/log'
import store from '../store'
const router = new VueRouter({
    routes: [{
            path: '/',
            redirect: '/Home',

        },
        {
            name: 'bowen1',
            path: '/bowen1',
            component: bowen1,

        },

        {
            name: 'newbowen',
            path: '/newbowen',
            component: newbowen,

        },
        {
            name: 'changebowen',
            path: '/changebowen',
            component: changebowen,

        },

        {
            name: 'Home',
            path: '/Home',
            component: Home,
        },
        {
            name: 'register',
            path: '/register',
            component: register,
        },
        {
            name: 'log',
            path: '/log',
            component: log,
        }

    ],

    store
})
router.beforeEach((to, from, next) => {
    if (to.path == '/Home') {
        if (store.state.flag == 1) {
            next()
        } else {

            router.push({ path: '/log' })
            alert('请先登录')
        }
    } else {
        next()
    }
})

export default router