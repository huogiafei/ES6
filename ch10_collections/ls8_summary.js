'use strict';
/**method summary*/
//Map:size,has,get,set,delete,clear,forEach,keys,values,entries
//Set:size,has,add,delete,forEach,clear,keys,values,entries
//WeakMap:new,has,get,set,delete
//WeakSet:new,has,add,delete

{
    //let ws = new WeakSet([1,2,3,4]);//Invalid value
    let ws = new WeakSet([[1,2],[3,4],[5]]);
    console.log(ws);
}

{
    let wm = new WeakMap();
    //wm.set(1,2);
    //wm.set(Symbol(),2);
}
