
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import FrontOrderManager from "./components/listers/FrontOrderCards"
import FrontOrderDetail from "./components/listers/FrontOrderDetail"

import StoreCookManager from "./components/listers/StoreCookCards"
import StoreCookDetail from "./components/listers/StoreCookDetail"

import RiderDeliveryManager from "./components/listers/RiderDeliveryCards"
import RiderDeliveryDetail from "./components/listers/RiderDeliveryDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/fronts/orders',
                name: 'FrontOrderManager',
                component: FrontOrderManager
            },
            {
                path: '/fronts/orders/:id',
                name: 'FrontOrderDetail',
                component: FrontOrderDetail
            },

            {
                path: '/stores/cooks',
                name: 'StoreCookManager',
                component: StoreCookManager
            },
            {
                path: '/stores/cooks/:id',
                name: 'StoreCookDetail',
                component: StoreCookDetail
            },

            {
                path: '/riders/deliveries',
                name: 'RiderDeliveryManager',
                component: RiderDeliveryManager
            },
            {
                path: '/riders/deliveries/:id',
                name: 'RiderDeliveryDetail',
                component: RiderDeliveryDetail
            },



    ]
})
