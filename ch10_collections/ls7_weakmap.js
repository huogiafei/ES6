/**
 * 和WeakSet相似，只接受对象作为键名，null除外
 */
'use strict';
{
    let map = new WeakMap()
    //map.set(1,2) //Invalid value used as weak map key
    let obj = {
        name: 'a'
    }
    map.set(obj, 'hello world')
    console.log(map, map.get(obj))
}

{
    //部署私有属性
    let _counter = new WeakMap()
    let _action = new WeakMap()

    class CountAdd {
        constructor(counter, action) {
            _counter.set(this, counter);
            _action.set(this, action)
        }

        add() {
            let counter = _counter.get(this);
            if (counter < 1) return;
            counter++;
            _counter.set(this, counter)
            if (counter  === 10) {
                _action.get(this)();
            }
        }
    }

    let c = new CountAdd(8,()=> console.log('Great'))
    c.add();
    c.add();
}

