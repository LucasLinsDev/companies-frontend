<template>
  <q-layout view="lHh Lpr lFf">
    <q-header  class="bg-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          color="primary"
          icon="menu"
          aria-label="Menu"
          class="menu-icon"
          @click="openDrawer('left')"

        />

        <q-toolbar-title>
            <AutoComplete/>
        </q-toolbar-title>
          <q-btn color="white" text-color="primary" label="Adicionar Empresa"
              @click="openDrawer('right')"
          />

      </q-toolbar>
    </q-header>

    <q-dialog v-model="isOpenRight" position="right">
      <div class="my-custom-drawer">

          <FormCompany/>
      </div>
    </q-dialog>
    <q-drawer

        side="left"
        v-model="isOpenLeft"
        show-if-above
        bordered
        :width="356"
        :breakpoint="800"
        class="bg-primary no-border"
      >

          <Sidebar/>

    </q-drawer>

    <q-page-container  >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import FormCompany from 'src/components/FormCompany/FormCompany.vue';
import Sidebar from 'src/components/Sidebar/Sidebar.vue'
import AutoComplete from 'src/components/Ui/AutoComplete.vue'
import { ref } from 'vue'

const isOpenRight = ref(false)
const isOpenLeft = ref(false)


const openDrawer = (position) => {
  if(position == 'right'){
    isOpenRight.value = !isOpenRight.value
  } else {
    isOpenLeft.value = !isOpenLeft.value
  }

}

</script>

<style>
.search{
  max-width:150px;
}
/* Estilo personalizado para controlar a animação do Drawer */
.my-custom-drawer {
  background:#F8F8F8;
  position:absolute;
  right:0;
  top:0;
  width:1400px;
  padding:28px;
  height:100vh !important;
  animation: slideFromLeft 0.3s ease;
  max-height:100vh !important;
}
.hidden{
  display:none;
}

.menu-icon{
  display:none !important;
}
@media (max-width: 600px){
  .hidden{
    display:flex !important;
  }
.menu-icon{
  display:flex !important;
}
}

@media (max-width: 800px){
  .my-custom-drawer {
    width:100%;
    width:400px;
  }
}

@media (min-width: 600px){
.q-dialog__inner--minimized > div {
    max-width: 860px;
    max-height: 100vh;
}

}

@keyframes slideFromLeft {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
