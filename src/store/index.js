require('es6-promise').polyfill();
import Vue from 'vue';
import Vuex from 'vuex';
import Actions from './actions';

import { SET_PRODUCTS, RESET_PRODUCTS, SET_FILTER, SET_LIMIT } from './mutations-types';
import productsJson from '@/data.json';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    state: {
        limit: 10,
        products: [],
        filterObj: {
            filterField: '',
            filterValue: ''
        },

        uniqueProducts: [...new Set(productsJson.map(item => item.product))],
        uniqueColors: [...new Set(productsJson.map(item => item.color))],
        uniqueBrands: [...new Set(productsJson.map(item => item.brand))]
    },

    actions : Actions,

    getters: {
        products: state => state.products,
        limit: state => state.limit,

        getTotalProducts: state => state.products.length,

        getAllProducts: state => state.uniqueProducts,
        getAllColors: state => state.uniqueColors,
        getAllBrands: state => state.uniqueBrands,

        getFilterObj: state => state.filterObj
    },

    mutations: {
        [SET_PRODUCTS] (state, products) {
            state.products = products.data;
        },

        [RESET_PRODUCTS] (state) {
            state.limit = 0,
            state.products = [];
            state.filterObj = { filterField: '', filterValue: '' }
        },

        [SET_FILTER] (state, filterObj) {
            state.filterObj = filterObj;
        },

        [SET_LIMIT] (state, limit) {
            state.limit = limit;
        }
    },

    strict: debug
})
