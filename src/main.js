/*
$ npm install -g vue-cli
$ vue init webpack-simple my-project
$ cd my-project
$ npm install
$ npm run dev
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Countries from './Countries.vue';
import Home from './Home.vue';
import Info from './Info.vue';
import Authors from './Authors.vue';

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/countries', component: Countries},
    {path: '/app', component: App},
    {path: '/info', component: Info},
    {path: '/authors', component: Authors}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
