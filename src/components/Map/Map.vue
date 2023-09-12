<template>
 <q-page padding class="border-page" >
  <div id="map" style="width: 100%; height: calc(100vh - 96px); padding:8px; border-radius:20px; overflow: hidden;"></div>
  <CardBusiness
    :show="companySelect"
  />
 </q-page>
</template>

<script setup>
import { ref, watch, onUpdated  } from 'vue'
import useMap from 'src/composables/useMap'
import CardBusiness from 'src/components/Card/CardBusiness.vue'
import { onMounted, onBeforeMount } from 'vue';

import { storeToRefs } from 'pinia'
import { useCompanies } from 'src/stores/useCompanies'
import useLoading from 'src/composables/useLoading';
import { QPullToRefresh } from 'quasar';
const { initializeMap,addMakers, flyTo, companySelect, content,setupClickHandler  } = useMap()


const useCompany = useCompanies()
const { reset ,markers } = storeToRefs(useCompany)
const { showLoading,hideLoading } = useLoading()


const points = ref(markers)



watch(points,()=>{

  addMakers(points.value)
  setupClickHandler()

})

watch((companySelect)=>(novo,velho)=>{
  console.log(novo,velho)
})


onMounted(()=>{
  initializeMap()
  addMakers(points.value)

})

onBeforeMount(async()=>{
  await useCompany.getCategories()
  await useCompany.getStates()
})




</script>

<style>
.border-page{
  background:#e0e0e0;
}
</style>

