> Front End test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run test

# run 2e2 tests with test-cafe
npm run test-cafe
```



For the front end i decided to use VUE and VUEX for Single State Management,
following the best standard using separation of concerns.

We dispatch an Action, the Action Commit for Mutation and the components ask data for Vuex store using Getters.

The Server/REST side i did using Node framework Feather.js, for convenience i have the front end linked to a Node.js Heroku.
So you can test the front without running the server locally.

But you can check the server side code in github.
```
https://github.com/marceloch2/Products-list-featherjs-server
```

####### Front End Unit Test #####

```
Main App
    ✓ App have component NavHead injected

    ✓ App have component SideBar injected

    ✓ App have component RouterView injected

    ✓ App have component container-fluid element markup

    ✓ App have Main Div APP

Filters
  ✓ filtersFields computed initialized

  ✓ allProducts computed initialized

  ✓ allColors computed initialized

  ✓ allBrands computed initialized

  ✓ Filters computed initialized
  ✓ Data filterValue to start empty

  ✓ Filters have method filterProductBy

  ✓ Filters have method cleanFilters


MainContent
  ✓ MainContent have ProductList component injected


NavHead
  ✓ NavHead have Router Link component injected


ProductList
  ✓ Products computed initialized

  ✓ Pagination computed initialized

  ✓ Data limit to be 10

  ✓ ProductList have method setPagination


SideBar
  ✓ SideBar have Filters component injected

```

####### Front End E2E Test #####
Running four browsers to test all.
Take special attention running test-cafe to see the page resize for Iphone 6 screen size testing responsiveness

```
Running tests in:
 - Chrome 57.0.2979 / Mac OS X 10.12.4
 - Firefox 53.0.0 / Mac OS X 10.12.0
 - Chrome 57.0.2987 / Mac OS X 10.12.4
 - Safari 10.1.0 / Mac OS X 10.12.4

 Testing User List
 ✓ Check if Sidebar exist
 ✓ Check if main-wrapper exist
 ✓ Check if H1 exist
 ✓ Check if H1 have the right text
 ✓ Simulate iPhone 6 and check if bootstrap responsiveness will work
 ```
