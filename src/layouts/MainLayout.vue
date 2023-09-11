<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="openDrawer('left')"

        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <q-btn color="secondary" icon-right="mail" label="On Right"
          @click="openDrawer('right')"
        />
      </q-toolbar>
    </q-header>
    <q-drawer
        side="right"
        v-model="isOpenRight"
        show-if-above
        bordered
        :width="800"
        :breakpoint="800"
        :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      >
        <q-scroll-area class="fit">
        </q-scroll-area>
    </q-drawer>
    <q-drawer

        side="left"
        v-model="isOpenLeft"
        show-if-above
        bordered
        :width="356"
        :breakpoint="356"
        class="bg-primary no-border"
      >

          <Sidebar/>

    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import Sidebar from 'src/components/Sidebar/Sidebar.vue'
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
