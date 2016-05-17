'use strict';
//target
console.info('---------- demo1 ----------');
var [target,handler] = [{}, {}];
var proxy = new Proxy(target, handler);
console.log(proxy);
proxy.color = 'pink';
for (let key in proxy) {
    console.log(key);
}

console.log(target.color);
console.log(proxy);
console.log(target);
console.log(`target === proxy:${target === proxy}`);

//handler
console.info('---------- demo2 ----------');
handler = {
    set: function (target, key, value, receiver) {
        throw new Error('forbidden property set ');
    }
};

var proxy2 = new Proxy(target,handler);
proxy2.color = 'black';

proxy.name = 'cookie';
console.log(proxy.name);