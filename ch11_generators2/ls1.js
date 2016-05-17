'use strict';
function *foo() {
    try {
        var x = yield 3;
        console.log( "x: " + x ); // may never get here!
    }
    catch (err) {
        console.log( "Error: " + err );
    }
}

var test = foo();
test.next();
test.next();
test.next();