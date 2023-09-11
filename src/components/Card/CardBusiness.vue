<template>
  <div class="q-pa-md my-dialog" v-if="show" >
    <q-card class="my-card">
      <div class="floating-icon">
        <q-icon name="favorite" color="red" size="24px" />
      </div>

      <q-card-section>
        <div class="text-h6">{{ empresa }}</div>
        <div class="text-subtitle2">{{ representante }}</div>
      </q-card-section>
      <q-card-section>
        <div class="row">
          <div class="col-sm-6 col-6 col-md-6">
            <q-icon name="favorite" size="2em" color="red" />  E-mail
          </div>
          <div class="col-sm-6 col-6 col-md-6">
            <q-icon name="favorite" size="2em" color="red" />  email@email.com
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-6 col-md-6">
            E-mail
          </div>
          <div class="col-sm-6 col-6 col-md-6">
            {{ email }}
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-6 col-md-6">
            Localização
          </div>
          <div class="col-sm-6 col-6 col-md-6">
            {{ city }}
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6 col-6 col-md-6">
            Categoria
          </div>
          <div class="col-sm-6 col-6 col-md-6">
            {{ category }}
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
      default: 'email@email.com'
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
.my-dialog {
  position: absolute !important;
  bottom: 120px;
  left: 0;
  width:600px;

}
</style>
