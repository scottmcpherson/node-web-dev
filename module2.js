const util = require('util');
var A = "a diff value A";
var B = "a diff value B";
var m1 = require('./module1');
util.log('A=' + A + ' B=' + B + ' value=' + util.inspect(m1.values()))