import { mount } from 'avoriaz';
import SideBar from '@/components/SideBar'

const wrapper = mount(SideBar);

describe('SideBar', () => {
    it('SideBar have Filters component injected', () => {
        expect(typeof wrapper.find('.filters')).to.equal('object');
    })
});
