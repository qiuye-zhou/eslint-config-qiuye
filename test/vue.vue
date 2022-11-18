<template>
    <div>Type-test</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({});
</script>

<script setup>
JSON.stringify({ test: 'test' });
let a = 3;
for (let index = 0; index <= 10; index += 1) {
    a = index;
}

let test1 = 'test1';

Number.parseInt(test1 + a, 10);
</script>
