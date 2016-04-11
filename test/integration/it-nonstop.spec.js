'use strict';

describe('it-nonstop.net website', function() {
    
    it('should have a correct title on the homepage', function() {
        browser.url('http://it-nonstop.net/').getTitle()
            .should.eventually.equal('IT NonStop 2016');
    });
    
    it('should have 7 speakers on the event in Voronezh, 2016', function(done) {
        var speakers = [ 'Alexander Belotserkovskiy',
            'Alexander Kasheverov', 'Alexey Rybakov',
            'Konstantin Mars', 'Stanislav Mekhonoshin',
            'Vecheslav Mikhailov', 'Vitaliy Bolshakov' ];
        browser.url("http://it-nonstop.net/city/voronezh#shedule")
            .waitForVisible('#visitors').getSource()
            .then(function (source) {
                speakers.forEach(function (speaker) {
                    source.toString().indexOf(speaker)
                        .should.be.greaterThan(-1); 
                });
                done()
            })
    });
    
});