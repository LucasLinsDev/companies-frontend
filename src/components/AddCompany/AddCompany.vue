<template>
  <q-drawer
  side="right"
  v-model="isOpen"
  class="form-company">
    <div class="row">
      <div class="col-6 column">
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <Input/>
          <div class="row">
            <div class="col-6">
              <Input/>
            </div>
            <div class="col-6">
              <Input/>
            </div>
          </div>
          <div class="row ">
            <div class="col-6">
              <Input/>
            </div>
            <div class="col-6">
              <Input/>
            </div>
          </div>
      </div>
      <div class="col-6 ">
        <Input/>
        <Input/>
      </div>
    </div>
    <div class="row">
      <q-btn color="purple" label="Purple" />
      <q-btn color="black" label="Black" />
    </div>
  </q-drawer>
</template>

<script setup>
import { ref } from 'vue'
import Input from 'src/components/Ui/Input.vue'

const isOpen = ref (true)

</script>

<style>
.q-drawer{
  max-width:700px !important;
  width:100%;
}
.form-company{
  padding:36px;
}
</style>
