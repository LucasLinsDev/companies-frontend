<template>
  <div
    class="sidebar bg-primary"
    bordered

  >
    <Logo/>
    <MenuLinks/>
    <Logout/>
  </div>
</template>


<script setup>

import { ref ,defineProps } from 'vue'
import Logo from 'src/components/Ui/Logo.vue'
import MenuLinks from './MenuLinks.vue'
import Logout from './Logout.vue'

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
