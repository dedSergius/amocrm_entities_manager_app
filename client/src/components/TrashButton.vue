<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button type="button" class="button-input button-input_red">
    <Loader :color="'white'" v-if="apiStore.isLoading" />
    <span class="button-input-inner" v-if="!apiStore.isLoading"
      ><font-awesome-icon icon="fa-solid fa-trash"
    /></span>
  </button>
</template>
<script setup>
import { useApiStore } from '../stores/ApiStore.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Loader from './Loader.vue';
library.add(faTrash);
const apiStore = useApiStore();
</script>
