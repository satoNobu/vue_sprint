import Vue from 'vue'
import Router from 'vue-router';
// import Comments from './views/Comments'
// import Login from './views/Login'
// import Register from './views/Register'

// vue cli3だとこのやり方はうまくいかない
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // {
        //     path: '/',
        //     component: Comments
        // },
        // {
        //     path: '/login',
        //     component: Login
        // },
        // {
        //     path: '/',
        //     component: Register
        // },
    ]
});