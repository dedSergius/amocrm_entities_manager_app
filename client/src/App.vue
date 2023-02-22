<template>
  <h1>AmoCRM entities manager</h1>
  <div class="create-panel">
    <p style="margin-bottom: 10px">Создать сущность</p>
    <div class="panel">
      <p>Тип:</p>
      <Dropdown :options="entitiesStore.types" />
      <Input />
      <Button />
    </div>
  </div>
  <Entities
    v-if="entitiesStore.entities && entitiesStore.entities.length !== 0"
    :entities="entitiesStore.entities"
  />
</template>

<script setup>
import { watch } from 'vue';
import { useEntitiesStore } from './stores/EntitiesStore';
import Dropdown from './components/Dropdown.vue';
import Input from './components/Input.vue';
import Button from './components/Button.vue';
import Entities from './components/Entities.vue';

const entitiesStore = useEntitiesStore();
watch(entitiesStore.entities, (e) => {
  console.log('a', e);
  localStorage.setItem('entities', JSON.stringify(e));
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 40%;
  min-height: 100vh;
  margin: auto;
}
.create-panel .panel {
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
}

.create-panel .panel > * {
  margin-right: 10px;
}
</style>
