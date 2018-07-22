import Vue from 'vue'
import App from './App.vue'
import router from './components/routers/router.vue';
import '../node_modules/foundation-sites/dist/css/foundation.min.css';

import * as Foundation from "foundation-sites";
import axios from 'axios';
import VueAxios from 'vue-axios';

import Vuex from 'vuex'
import store from './store/store';
global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;
Vue.use(VueAxios,axios,Vuex);
Vue.config.productionTip = false

new Vue({
    router,
    axios,
    store,
    render: h => h(App),
}).$mount('#app')