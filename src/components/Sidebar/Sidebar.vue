<template>
  <q-drawer
    class="sidebar bg-primary"
    bordered
    v-model="open"
  >
    <Logo/>
    <MenuLinks/>
    <Logout/>
  </q-drawer>
</template>


<script setup>
import { ref ,defineProps } from 'vue'
import Logo from 'src/components/Ui/Logo.vue'
import MenuLinks from './MenuLinks.vue'
import Logout from './Logout.vue'


const props = defineProps({
  isOpen: Boolean,
})

const open = ref(props.isOpen)
</script>

<style>
.sidebar{
  position:relative;
  max-width:320px;
  width:100%;
  height:100vh;
  padding:36px;
  z-index:999 !imporant;
  display:flex;
  flex-direction:column;
  align-items:center;

}


</style>
