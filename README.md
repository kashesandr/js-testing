# Web-testing

using automation testing in web development
this testing suite doesn't depend on any framework (like Angular, Backbone...)
for testing apps based on frameworks there are plenty of variants more relevant but the idea is the same 

# Set up

install nodejs(>= 5.6), npm

install all dependencies
    `npm install`

# How to use

Run simple webserver & selenium 

First of all run 
    `npm run start`
the command will run `npm run build` (see webpack-conf.js for details)
and then `npm run server`, so you will see a simple web-server run locally
and you can go and test the example by hands
    
Then if you want to run integration tests run
    `npm run selenium`

Then you can run tests. 
    
For unit tests 
    `npm run test:unit`
this will run unit tests using karma (see karma-conf.js for details)

For integration tests
    `npm run test:integration`
this will run integration tests (see wdio-conf.js for details)

For integration tests with cucumber
    `npm run test:integration-cucumber`
this will run integration tests with cucumber (see wdio-cucumber-conf.js for details)

All tests
    `npm run test`
this run unit and integration (without cucumber) tests consequently