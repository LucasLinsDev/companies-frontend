<template>
  <q-page padding class="bg-primary flex column align-center justify-center">
    <form @submit.prevent="login" class="form-submit">
      <Logo/>
      <Input
        label="E-mail"
        v-model:input="form.password"
        type="text"
      />
      <Input
        label="Password"
        v-model:input="form.email"
        type="password"
      />
      <Button/>
    </form>
  </q-page>
</template>

<script setup>

import Logo from 'src/components/Ui/Logo.vue'
import Input from 'src/components/Ui/Input.vue'
import Button from 'src/components/Ui/Button.vue'
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
})

const login = () => {}

</script>
