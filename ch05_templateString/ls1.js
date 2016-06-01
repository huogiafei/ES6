'use strict';
//demo1
console.info('---------- demo1 ----------');
let name = 'cookie';
console.log(`\$Hello World\$,\`${name}\`\{dog\}!`);

//demo2
console.info('---------- demo2 ----------');
let beer = {
    name: 'pure',
    price: '12'
}
let desc = `price: ${beer.price}`;
let text = `name:${name} , ${desc}`;
console.log(text);

//demo3
console.info('---------- demo3 ----------');
let hack = `\<script\>alert('hack')\<\/script\>`;
let htmlStr = `
    <h1>Demo3</h1>
        <p>text</p>
        ${hack}
        <script>alert('no');</script>
`;
// var parent = document.createElement('div');
// parent.innerHTML = htmlStr;
// var child = document.createElement('pre');
// child.innerHTML = htmlStr;
// parent.appendChild(child);
// document.body.appendChild(parent);

//demo4 带标签的模板字符串
console.info('---------- demo4 ----------');
var [a , b] = [10, 15];
function show(strings, ...values) {
    console.log(`string: ${strings[0]}`);
    console.log(`string: ${strings[1]}`);
    console.log(values[0]);
    console.log(values[1]);
    return 'demo4';
}
var str = 'helloworld';
console.log(show `hello ${a+b} world`);
console.info('----- split -----');
console.log(show `hello world${a}  ${b}`);
//tag `string text ${expression} string text`;

//demo5:raw
console.info('---------- demo5 ----------');
function raw(strings){
    console.log(strings.raw[0]);
    console.log(strings.raw[1]);
    return strings;
}
console.log(raw `foo${a+b}/nbar`);
console.log(`foo${a + b}/nbar`);
console.log(String.raw`Hi ${a + b} Siri`);

//demo6:safety
console.info('---------- demo6 ----------');
var c = 10;
console.log(`${c += 10}`);
`${console.warn(`this is c(demo6):,${c}`)}`;
