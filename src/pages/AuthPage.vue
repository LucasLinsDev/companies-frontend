<template>
  <q-page padding class="bg-primary flex column align-center justify-center">
    <form @submit.prevent="login" class="form-submit">
      <Logo/>
      <Input
        label="E-mail"
        v-model:input="form.password"
        type="email"
        placeholder="admin@email.com"
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
import { ref } from 'vue'
import Logo from 'src/components/Ui/Logo.vue'
import Input from 'src/components/Ui/Input.vue'
import Button from 'src/components/Ui/Button.vue'

import useNotify from 'src/composablses/useNotify'
import useLoading from 'src/composables/useLoading'
import useValidation from 'src/composables/useValidation'

const { showLoading, hideLoading  } = useLoading()
const { notifyError, notifySuccess } = useNotify()
const { authValidation } = useValidation()
const form = ref({
  email: '',
  password: '',
})


const login = () => {

  if (authValidation(form.value.email,form.value.senha)) {
      return
  }

  notifySuccess('Login')
}



</script>
