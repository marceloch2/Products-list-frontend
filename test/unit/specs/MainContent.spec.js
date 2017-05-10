import { mount } from 'avoriaz'
import MainContent from '@/components/MainContent'

const wrapper = mount(MainContent)

describe('MainContent', () => {
    it('MainContent have ProductList component injected', () => {
        expect(typeof wrapper.find('.product-list')[0]).to.equal('object');
    })
})
