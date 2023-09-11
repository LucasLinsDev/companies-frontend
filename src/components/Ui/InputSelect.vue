<template>
  <div class="input-form">
    <label
    class="primary input-label"
    >{{ label }}</label>
    <q-select
      bg-color="white"
      filled
      :placeholder="placeholder"
      v-model="inputComputed"
      :type="inputType"
      class="w-fullscreen"
      :rules="rules"
      :maxlength="max"
      :mask="mask"
      :require="required"
    />

  </div>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: 'Label'
  },
  placeholder: {
    type: String,
    default: 'Lorem ipsum'
  },
  inputType: {
    type: String,
    default: 'text'
  },
  rules: {
    type: Array,
    default: () => []
  },
  max:{
    type: Number,

  },
  mask:{
    type: [String, Object],
  },
  required: {
    type: Boolean,
    default:false
  }
});

const  emit  = defineEmits()
const input = ref('');

const inputComputed = computed({
  get: () => input.value,
  set: (val) => {
    input.value = val;
    emit('update:input', val)
  },
});
</script>
