<template>
  <div class="logout">

  <q-btn
    color="bg-primary"
    text-color="white"
    icon="logout"
    label="Logout"
    flat
    class="bg-primary q-btn__content--left"
    @click="handleLogout"
  />


  </div>
</template>


<script setup>
import { userStore } from 'src/stores/userStore'
import { useRouter } from 'vue-router'
import useNotify from 'src/composables/useNotify'

const router = useRouter()
const { logout } = userStore()
const { notifyError, notifySuccess } = useNotify()

const handleLogout = () =>{
  try {
      logout()
      notifySuccess('Logout efetuado com sucesso')
      setTimeout(()=>{
        router.push('/')
      },500)
  } catch (error){
    notifyError(error)
  }
}

</script>

<style>
.logout{
  position: absolute;
  bottom:40px;
  width:100%;
  padding-left:36px;
  padding-right:36px;
}
.logout button{
  width:100%;
  border-radius:8px;
  border:none;
  box-shadow:none;
  height:50px;
  display:flex;
  align-items: flex-start;

}
</style>
