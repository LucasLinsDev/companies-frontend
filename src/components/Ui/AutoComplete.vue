<template>
  <q-select
          filled
          v-model="model"
          use-input
          hide-selected
          fill-input
          input-debounce="300"
          :options="options"
          @filter="filterFn"
          style="width: 250px; padding-bottom:10px; padding-top:10px; "
          emit-value
          map-options
  >

    <template v-slot:option>
      <div>
        <div v-for="(option, index) in stringOptions" :key="index"  class="q-item cursor-pointer content-header">
          <div class="title-auto">{{ option.label }}</div>
          <div class="title-subtitle">{{ option.value }}</div>
        </div>
      </div>
    </template>
  </q-select>
</template>

<script setup>
import { ref } from 'vue';

const model = ref();
const stringOptions = [
  { label: 'Google', value: 'g1111111111' },
  { label: 'Facebook', value: 'f2222222222' },
  { label: 'Twitter', value: 't3333333' },
  { label: 'Apple', value: 'a44444444' },
  { label: 'Oracle', value: 'o555555555' }
];
const options = ref(stringOptions);

const filterFn = (val, update, abort) => {
  update(() => {
    const needle = val.toLowerCase();
    options.value = stringOptions.filter(v => v.label.toLowerCase().indexOf(needle) > -1);
  });
};
</script>

<style>

.content-header{
  padding:0px;
  border-bottom:1px solid black;
  padding:8px;
}

.title-auto{
  font-size:16px;
}

.title-subtitle{
  font-size:12px;
}
</style>
