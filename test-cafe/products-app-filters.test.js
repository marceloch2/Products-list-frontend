import { Selector } from 'testcafe';

fixture('Testing User List')
.page('http://localhost:8080');

test('Check if Sidebar exist', async t => {
    const sidebar = Selector('nav.sidebar').exists;

    await t.expect(sidebar).ok();
});

test('Check if main-wrapper exist', async t => {
    const main = Selector('#main-wrapper').exists;

    await t.expect(main).ok();
});

test('Check if H1 exist', async t => {
    const header = Selector('#main-wrapper h1').exists;

    await t.expect(header).ok();
});

test('Check if H1 have the right text', async t => {
    const header = Selector('#main-wrapper h1').withText("Products");

    await t.expect(header).ok();
});

test('Simulate iPhone 6 and check if bootstrap responsiveness will work', async t => {
    const sidebar = Selector('nav.sidebar');

    await t
        .resizeWindowToFitDevice('iPhone 6', {
            portraitOrientation: true
        })
        .expect(sidebar.getStyleProperty('display')).eql('none')
});
