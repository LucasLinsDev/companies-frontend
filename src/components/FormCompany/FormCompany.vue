<template>
  <form class="form-business" @submit.prevent="registerBusiness">
    <h2 class="title primary text-bold">Cadastro Empresa</h2>
  <div class="row row-input">
    <div class="col-12 col-sm-12 col-md-6 q-pa-md">
      <Input
        label="Nome"
        placeholder="CONVICTI"
        :rules="validationInputs.minLength3"
      />
      <Input
        label="Cnpj"
        placeholder="##.###.###/####-##"
        :rules="validationInputs.cnpj.validation"
        :max="20"
        :mask="validationInputs.cnpj.mask"
      />
      <Input
        label="E-mail"
        placeholder="empresa@empresa.com"
        :rules="validationInputs.minLength3"
        :max="25"
        inputType="email"
      />
      <Input
        label="Whatsapp"
        placeholder="WhatsApp"
        :rules="validationInputs.numeroValidation"
        :max="25"
        :mask="`(XX) XXXXX-XXXX`"
        inputType="text"
      />
      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 q-pa-md">
          <Input
              label="Latitude"
              placeholder="-51.2277"
              required="true"
            />
        </div>
        <div class="col-12 col-sm-12 col-md-6 q-pa-md">
          <Input
              label="Longitude"
              placeholder="-31.2277"
              required="true"
            />
        </div>
        <div class="col-12 col-sm-12 col-md-6 q-pa-md">
          <InputSelect
              label="Estado"
              placeholder="-51.2277"
              required="true"
            />
        </div>
        <div class="col-12 col-sm-12 col-md-6 q-pa-md">
          <InputSelect
              label="Cidade"
              placeholder="-31.2277"
              required="true"
            />
        </div>
      </div>
    </div>
    <div class="col-12 col-sm-12 col-md-6 q-pa-md">
      <Input
        label="Observações"
        :rules="validationInputs.minLength3"
      />
      <InputSelect
              label="Categorias"
              placeholder="-31.2277"
              required="true"
            />
    </div>
  </div>
  <div class="row flex align-center flex-center">

      <div class="q-pa-md">
        <q-btn label="Cadastar Empresa" color="primary" type="submit" @click="addMark"/>
      </div>
  </div>
  </form>
</template>

<script setup>
import { ref,watch } from 'vue'
import { useCompanies } from 'src/stores/useCompanies';
import Input from 'src/components/Ui/Input.vue'
import InputSelect from 'src/components/Ui/InputSelect.vue'
import useMap from 'src/composables/useMap'

const useCompany = useCompanies()
const validationInputs = {
  minLength3: [val => val.length > 5 || 'Mínimo 3 Letras'],
  numeroValidation: [val => val.length > 5 || 'Número Invalido'],
  cnpj: {
    validation: [val => val.length == 14 || 'Cnpj deve ter 14 números'],
    mask: '##.###.###/####-##'
  }
}


const form = ref({
  name: '',
    city_id: '',
    cnpj: '',
    email:'',
    state_id: '',
    category_id: '',
    latitude: '',
    longitude: '',
    whatsapp_phone: '',
    representantive_user: '',
    notes: ''
})




const addMark = ()=>{
  useCompany.pushMarkers()
}



</script>

<style>

.title{
  font-size:24px;
  padding:0px;
  margin:0px;
  margin-left:8px;
}

.form-business{
  padding-left:26px;
}

</style>
