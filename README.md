# js-testing

using automation testing in web development
this testing suite doesn't depend on any framework (like Angular, Backbone...)
for testing apps based on frameworks there are plenty of variants more relevant but the idea is the same 

# set up

install nodejs(>= 5.6), npm

install all dependencies
    `npm install`

# how to use

Firstly run 
    `npm run start`
    
the command will run `npm run build` (see webpack-conf.js for details)
and `npm run server` then you will see a simple web-server run locally
and you can go and test the example by hands
(btw `npm run build` & `npm run server` are defined in `package.json`)

Then run 
    `npm run test:unit`

this will run unit tests using karma (see karma-conf.js for details)
after tests gone you will see results in terminal

run
    `npm run test:integration`
    
this will run integration tests (see wdio-conf.js for details)
after tests gone you will see results in terminal

run 
    `npm run test`
    
this run unit and integration tests consequently 