<template>

  <button @click="addMakers(markers)">PLUS</button>
  <button @click="flyTo(-21.2277,-21.2277,8)">fly</button>
  <button>{{ companySelect }}</button>
  <div id="map" style="width: 100%; height: calc(100vh - 90px);"></div>



</template>

<script setup>
import { ref } from 'vue'
import useMap from 'src/composables/useMap'
import { onMounted, onBeforeMount } from 'vue';

const open  = ref(false)

const { initializeMap,addMakers, flyTo,companySelect } = useMap()

const markers = [
  { id: 1, lon: -51.2277, lat: -30.0346 },
  { id: 2, lon: -52.2277, lat: -31.0346 }
];

onMounted(()=>{
  initializeMap()

})

// onBeforeMount(()=>{
//   addMakers(markers)
// })




</script>
