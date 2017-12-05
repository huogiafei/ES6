'use strict';

/**
 * Iterator 除了next方法，还有return和throw可选方法
 *
 */

function readLineSync(file) {
    return {
        next() {
            if (file.isAtEndOfFile()) {
                file.close();
                return {done: true};
            }
        },
        return() {
            file.close();
            return {done: true};
        },
    };
}