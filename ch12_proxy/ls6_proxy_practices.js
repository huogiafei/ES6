'use strict';
/*var Tree = new Proxy({},{

 });*/
/*var Tree = function () {
    return {};
};
Object.prototype.toString = function () {
    for (var key in this) {
        console.log(`key: ${key}`);
    }
}

var tree = new Tree();
console.log(tree);
tree.branch1 = 'red';
//tree.branch1.branch2.twig = 'green';
console.log(tree);*/

console.info('---------- demo1 ----------');
/*{
    let Tree = function () {
    };
    let p = new Proxy(Tree, {
        get: function (target, key, receiver) {
            console.log(`getting ${key}!`);
            return Reflect.get(target, key, receiver);
        },

    })

    let tree = new Tree();
    tree.branch1 = 'red';
    console.log(tree.branch1);
}*/

console.info('---------- demo2 ----------');
function Tree2() {
    return new Proxy({}, handler2);
}
var handler2 = {
    get: function (target, key, receiver) {
        if(!(key in target)) {
            target[key] = Tree2();
        }
        return Reflect.get(target,key,receiver);
    }
};

var tree2 = Tree2();
tree2.branch1.branch2.twig = "green";
tree2.branch1.branch3.twig = "yellow";
console.log(tree2);
