<template>
  <div class="input-form">
    <label class="text-white input-label">{{ label }}</label>
    <q-input
      bg-color="white"
      filled
      :placeholder="placeholder"
      v-model="inputComputed"
      :type="inputType"
      class="w-fullscreen"
      :rules="rules"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
    label: {
      type: String,
      default: 'Label'
    },
    placeholder :{
      type: String,
      default: 'Lorem ipsum'
    },
    inputType: {
      type: String,
      default: 'text'
    },
    rules: {
      type: Array,
      default: () =>[]
    }
})
const input = ref('');

const inputComputed = computed({
  get: () => input.value,
  set: (val) => {
    input.value = val;
    emit('update:input', val);
  },
});

</script>

