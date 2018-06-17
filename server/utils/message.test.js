var expect = require('expect');
var mocha = require('mocha');
var {generateMessage} = require('./message');


describe('generateMessage',()=>{
    it('should generate correct message  object',()=>{
var from = 'prakash';
var text= 'hello';
var message = generateMessage(from,text);

expect(message.createdAt).toBeA('number');
expect(message).toInclude({from,text});

    });
});