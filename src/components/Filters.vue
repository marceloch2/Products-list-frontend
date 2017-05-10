<template lang="html">
    <div class="sidebar-filters">
        <span v-if="Object.keys(filters).length && filters.fieldValue && filters.fieldValue[0]">
            <a href="javascript:void(0)" @click='cleanFilters'>Clean Filters</a>
            ({{filters.fieldName}} = {{filters.fieldValue[0]}})
        </span>

        <ul class="nav nav-pills flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#">Colors</a>
            </li>
            <li class="nav-item" v-for="(color, key) in allColors">
                <input :id="'color_' + key" type="checkbox" v-model="filterValue" :value="color" @change="filterProductBy('color')" />
                <label :for="'color_' + key">{{color}}</label>
            </li>
        </ul>

        <hr />
        <ul class="nav nav-pills flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#">Products</a>
            </li>
            <li class="nav-item" v-for="(product, key) in allProducts">
                <input :id="'products_' + key " type="checkbox" v-model="filterValue" :value="product" @change="filterProductBy('product')" />
                <label :for="'products_' + key ">{{product}}</label>
            </li>
        </ul>

        <hr />
        <ul class="nav nav-pills flex-column">
            <li class="nav-item">
                <a class="nav-link active" href="#">Brands</a>
            </li>
            <li class="nav-item" v-for="(brand, key) in allBrands">
                <input :id="'brands_' + key " type="checkbox" v-model="filterValue" :value="brand" @change="filterProductBy('brand')" />
                <label :for="'brands_' + key ">{{brand}}</label>
            </li>
        </ul>
    </div>
</template>

<script>

import Store from '@/store/index.js';
import Axios from 'axios';

export default {
    data () {
        return {
            filterValue: []
        }
    },

    watch : {
        filterObj : function () {}
    },

    mounted () {},

    computed : {
        filtersFields () {
            return Store.getters.initialProducts;
        },

        allProducts () {
            return Store.getters.getAllProducts;
        },

        allColors () {
            return Store.getters.getAllColors;
        },

        allBrands () {
            return Store.getters.getAllBrands;
        },

        filters () {
            return Store.getters.getFilterObj;
        }
    },

    methods: {
        filterProductBy (field) {
            Store.dispatch('setFilter', { fieldName: field, fieldValue: this.filterValue });
            Store.dispatch('setLimit', 0);
            Store.dispatch('getProducts');
        },

        cleanFilters () {
            this.filterValue = [];
            Store.dispatch('cleanFilters');
        }
    }
}

</script>
<style scoped lang="scss">
    .sidebar-filters {
        padding: 10px;
    }
</style>
