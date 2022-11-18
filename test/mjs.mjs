import '.';

JSON.stringify({ test: 'test' });

const object = { a: '1', b: 'b' };

let test1 = 'test1';

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        test1 = object[key];
    }
}

console.log(test1);

Number.parseInt(test1, 10);
