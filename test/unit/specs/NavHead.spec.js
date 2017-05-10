import { mount } from 'avoriaz';
import NavHead from '@/components/NavHead'

const wrapper = mount(NavHead);

describe('NavHead', () => {
    it('NavHead have Router Link component injected', () => {
        expect(typeof wrapper.find('.router-link')).to.equal('object');
    })
});
