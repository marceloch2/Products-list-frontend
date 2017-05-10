import { mount } from 'avoriaz';
import ProductList from '@/components/ProductList'

const wrapper = mount(ProductList);

describe('ProductList', () => {
    it('Products computed initialized', () => {
        expect(wrapper.computed().products).to.be.an('function');
    });

    it('Pagination computed initialized', () => {
        expect(wrapper.computed().pagination).to.be.an('function');
    });

    it('Data limit to be 10', () => {
        expect(wrapper.data().limit).to.be.equal(10);
    });

    it('ProductList have method setPagination', () => {
        expect(typeof wrapper.methods().setPagination).to.equal('function');
    });
});
