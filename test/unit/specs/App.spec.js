import { mount } from 'avoriaz';
import App from '@/App'

const wrapper = mount(App);

describe('Main App', () => {
    it('App have component NavHead injected', () => {
        expect(typeof wrapper.find('.nav-head')).to.equal('object');
    })

    it('App have component SideBar injected', () => {
        expect(typeof wrapper.find('.side-bar')).to.equal('object');
    })

    it('App have component RouterView injected', () => {
        expect(typeof wrapper.find('.router-view')).to.equal('object');
    })

    it('App have component container-fluid element markup', () => {
        expect(typeof wrapper.find('.container-fluid')).to.equal('object');
    })

    it('App have Main Div APP', () => {
        expect(typeof wrapper.find('#app')).to.equal('object');
    })
});
