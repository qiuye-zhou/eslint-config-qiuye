module.exports = {};

JSON.stringify({ a: 1, b: 3, c: 'c4' });

const object = { a: '1', b: 'b' };

let d = 1;

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        d = object[key];
    }
}

console.log(d);

String.toString(d);
