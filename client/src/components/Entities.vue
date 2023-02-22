<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <table id="entities">
    <tr>
      <th>ID</th>
      <th>Название</th>
      <th>Тип</th>
    </tr>
    <Entity v-for="entity of entities" :key="entity.id" :entity="entity" />
  </table>
  <button :style="{ marginTop: '10px' }" @click="clear">
    <font-awesome-icon icon="fa-solid fa-broom" /> Очистить список
  </button>
</template>
<script setup>
import { defineProps } from 'vue';
import Entity from './Entity.vue';
import { useEntitiesStore } from '../stores/EntitiesStore';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
library.add(faBroom);
const entitiesStore = useEntitiesStore();
const clear = () => {
  alertify
    .confirm(
      'Очистить список сущностей? Это не приведет к удалению сущностей в amoCRM.',
      () => {
        entitiesStore.entities.length = 0;
        alertify.success('Очищено');
      },
    )
    .set('labels', {
      ok: 'Да',
      cancel: 'Нет',
    })
    .set('movable', false)
    .set('closable', false)
    .setHeader('Очистить список');
};
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  entities: { type: Array, required: true },
});
</script>
<style>
#entities {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#entities td,
#entities th {
  border: 1px solid #ddd;
  padding: 8px;
}

#entities tr:nth-child(even) {
  background-color: #f2f2f2;
}

#entities tr:hover {
  background-color: #ddd;
}

#entities th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #ababab;
  color: white;
}
</style>
