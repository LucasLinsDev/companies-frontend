<template>
 <q-page padding class="border-page" >
  <div id="map" style="width: 100%; height: calc(100vh - 96px); padding:8px; border-radius:20px; overflow: hidden;"></div>
  <CardBusiness
    :show="companySelect"
  />
 </q-page>
</template>

<script setup>
import { ref, watch } from 'vue'
import useMap from 'src/composables/useMap'
import CardBusiness from 'src/components/Card/CardBusiness.vue'
import { onMounted, onBeforeMount } from 'vue';



const { initializeMap,addMakers, flyTo, companySelect } = useMap()




const markers = [
  { id: 1, lon: -51.2277, lat: -30.0346 },
  { id: 2, lon: -52.2277, lat: -31.0346 }
];

onMounted(()=>{
  initializeMap()
  addMakers(markers)
})



</script>

<style>
.border-page{
  background:#e0e0e0;
}
</style>

