<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <tbody>
    <tr data-id="{{ entity.id }}">
      <td>
        <a :href="entity.url" target="_blank">{{ entity.id }}</a>
      </td>
      <td>{{ entity.name }}</td>
      <td>
        {{ entitiesStore.types.find((t) => t.value === entity.type).label }}
      </td>
    </tr>
  </tbody>
</template>

<script setup>
import { defineProps } from 'vue';
import { useEntitiesStore } from '../stores/EntitiesStore';
const entitiesStore = useEntitiesStore();
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  entity: {
    type: Object,
    require: true,
    default: () => {
      return {};
    },
  },
});
</script>
<style scoped>
td {
  text-align: left;
}
</style>
