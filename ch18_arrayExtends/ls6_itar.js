'use strict';
/** entries(),keys(),values() **/
//demo1
console.info('---------- demo1 ----------');
{
    let myMap = new Map([['1', 'a'], ['2', 'b'], ['3', 'c']]);
    console.log('entries:' + myMap.entries() + '=>' + Array.from(myMap.entries()));
    console.log('keys:   ' + myMap.keys() + '=>' + Array.from(myMap.keys()));
    console.log('values: ' + myMap.values() + '=>' + Array.from(myMap.values()));

    for (let item of myMap.entries()) {
        console.log(item);
    }
}

//demo2
console.info('---------- demo2 ----------');
{
    let letter = ['hello', 'world'];
    let entries = letter.entries();
    /*do {
        //console.log(entries.next().value);

    } while (!f)*/
    var {v, f} = entries.next()
    console.log(v)

}
