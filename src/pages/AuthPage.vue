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

import useNotify from 'src/composables/useNotify'
import useLoading from 'src/composables/useLoading'
import useValidation from 'src/composables/useValidation'
import { userStore } from 'src/stores/userStore'
import { useRouter } from 'vue-router'

const { showLoading, hideLoading  } = useLoading()
const { notifyError, notifySuccess } = useNotify()
const { authValidation } = useValidation()

const form = ref({
  email: '',
  password: '',
})

const userAuth = userStore()
const router = useRouter()

const login = async () => {

  if (authValidation(form.value.email,form.value.password)) {
      return
  }

  try{
    await userAuth.login(form.value)
    notifySuccess('LOGANDO')
    router.push('/admin')
  } catch (error){
    notifyError('Error ao tentar fazer o login')
  }


}



</script>
