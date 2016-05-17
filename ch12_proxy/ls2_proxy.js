'use strict';
console.info('---------- demo1 ----------');
var [target,handler] = [{},{}];
var proxy = new Proxy(target,handler);
console.log(proxy);
proxy.color = 'pink';
for(let key in proxy){
    console.log(key);
}


console.log(target.color);
console.log(proxy);
console.log(target);
console.log(`target === proxy:${target === proxy}`);
