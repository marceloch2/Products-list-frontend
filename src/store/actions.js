import Axios from 'axios';

export default {
    getProducts ({commit, state}) {
        let field = state.filterObj.fieldName, value = state.filterObj.fieldValue;

        let filterQuery = field && value && (value && value.length) ? '&' + field + '=' + value : '';
        let limit = '$skip=' + state.limit;

        Axios.get(`${state.apiUrl}/products?${limit}${filterQuery}`)
        .then(function (response) {
            commit('SET_PRODUCTS', response);
        })
        .catch(function (error) {
            throw error;
        });
    },

    getProductById ({commit, state}, id) {
        Axios.get(`${state.apiUrl}/products/${id}`)
        .then(function (response) {
            commit('SET_CURRENT_PRODUCT', response);
        })
        .catch(function (error) {
            throw error;
        });
    },

    setFilter ({commit, state}, filter) {
        commit('SET_FILTER', filter);
    },

    setLimit ({commit, state}, limit) {
        commit('SET_LIMIT', limit);
    },

    cleanFilters ({dispatch, commit}) {
        commit('RESET_PRODUCTS');
        dispatch('getProducts');
    }
}
