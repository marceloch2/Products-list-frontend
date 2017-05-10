import { mount } from 'avoriaz'
import Filters from '@/components/Filters'

const wrapper = mount(Filters)

describe('Filters', () => {
    it('filtersFields computed initialized', () => {
        expect(wrapper.computed().filtersFields).to.be.an('function')
    })

    it('allProducts computed initialized', () => {
        expect(wrapper.computed().allProducts).to.be.an('function')
    })

    it('allColors computed initialized', () => {
        expect(wrapper.computed().allColors).to.be.an('function')
    })

    it('allBrands computed initialized', () => {
        expect(wrapper.computed().allBrands).to.be.an('function')
    })

    it('Filters computed initialized', () => {
        expect(wrapper.computed().filters).to.be.an('function')
    })

    it('Data filterValue to start empty', () => {
        expect(wrapper.data().filterValue.length).to.be.equal(0)
    })

    it('Filters have method filterProductBy', () => {
        expect(typeof wrapper.methods().filterProductBy).to.equal('function');
    });

    it('Filters have method cleanFilters', () => {
        expect(typeof wrapper.methods().cleanFilters).to.equal('function');
    });
})
