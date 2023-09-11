<template>
  <div class="q-pa-md my-dialog" v-if="show" >
    <q-card class="my-card">
      <div class="floating-icon">
        <q-icon name="business" color="primary" size="24px" />
      </div>

      <q-card-section>
        <div class="text-h6 primary">{{ empresa }}</div>
        <div class="text-subtitle2 primary">{{ representante }}</div>
      </q-card-section>
      <q-card-section>
      <div class="row">
       <div class="col-12 col-sm-6 col-xs-12 row responsive-padding responsive-padding">
        <q-icon name="email" color="primary" size="24px" />
        <div class="text-subtitle2  gray primary mr-2"> E-mail</div>
       </div>
       <div class="col-12 col-sm-6 col-xs-12 row responsive-padding">
        <q-icon name="email" color="primary" size="24px" />
        <div class="text-subtitle2  gray primary mr-2">{{ email }}</div>
       </div>
      </div>
      </q-card-section>
      <q-card-section>
      <div class="row responsive-padding">
       <div class="col-12 col-sm-6 col-xs-12 row responsive-padding">
        <q-icon name="email" color="primary" size="24px" />
        <div class="text-subtitle2  gray primary mr-2"> Localização </div>
       </div>
       <div class="col-12 col-sm-6 col-xs-12 row responsive-padding">
        <q-icon name="email" color="primary" size="24px" />
        <div class="text-subtitle2  gray primary mr-2">{{ city }}</div>
       </div>
      </div>
      </q-card-section>
      <q-card-section>
      <div class="row responsive-padding">
       <div class="col-12 col-sm-6 col-xs-12 row responsive-padding">
        <q-icon name="email" color="primary" size="24px" />
        <div class="text-subtitle2  gray primary mr-2"> Categoria </div>
       </div>
       <div class="col-12 col-sm-6 col-xs-12 row responsive-padding">
        <q-icon name="email" color="primary" size="24px" />
        <div class="text-subtitle2  gray primary mr-2 categoria">{{ category }}</div>
       </div>
      </div>
      </q-card-section>
    </q-card>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    show: {
      type: Boolean,
      default: false
    },
    empresa: {
      type: String,
      default: 'Nome da empresa'
    },
    representante: {
      type: String,
      default: 'Node do representante',
    },
    email: {
      type: String,
      default: 'E-mail'
    },
    city: {
      type: String,
      default: 'Cidade -ES'
    },
    category: {
      type: String,
      default: 'Categoria'
    }
})



</script>

<style>
.floating-icon {
  position: absolute; /* Define o ícone como posição absoluta */
  top: 8px;
  right: 8px; /* Define o espaçamento de 8px em todos os lados */
  padding:16px;
  z-index:99;
}
.my-card{
  border-radius:26px !important;
}
.my-dialog {
  position: absolute !important;
  bottom: 120px;
  left: 0;
  width:600px;

}
.mr-2{
  margin-left:8px;
}

.gray{
  color:#AAA9A9
}
.categoria{
  padding:8px;
  background:#D4DEF6;;
  border-radius:20px;
  color:#96A0B9;
  position:relative;
  top:-8px;
}

@media (max-width:600px){
  .responsive-padding{
     padding:8px;
  }
  .my-dialog {
    width:100%;
    max-width:100%;

  }

  .my-card{
    border-radius:0px !important;
    bottom:-100px;
  }
}
</style>
