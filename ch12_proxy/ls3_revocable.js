'use strict';
let target = {}
let handler = {}
let {proxy , revoke } = Proxy.revocable(target , handler)

proxy.foo = 123
console.log(proxy.foo)

revoke();
//proxy.foo //Cannot perform 'get' on a proxy that has been revoked