import Axios from 'axios';

export default {
    getProducts ({commit, state}) {
        let field = state.filterObj.fieldName, value = state.filterObj.fieldValue;

        let filterQuery = field && value && (value && value.length) ? '&' + field + '=' + value : '';
        let limit = '$skip=' + state.limit;

        Axios.get('http://localhost:3030/products?' + limit + filterQuery)
        .then(function (response) {
            commit('SET_PRODUCTS', response);
        })
        .catch(function (error) {
            console.log(error);
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
