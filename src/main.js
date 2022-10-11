import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'
import moment from "moment"
import * as echarts from 'echarts'

Vue.use(echarts)
Vue.prototype.$echarts = echarts

Vue.prototype.$moment = moment

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')
