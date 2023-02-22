<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <input
    v-model="name"
    class="text-input"
    type="text"
    placeholder="Имя (необязательно)"
  />
</template>

<script setup>
import { ref, watch } from 'vue';
import { useControlStore } from '../stores/ControlStore.js';
const controlStore = useControlStore();
const name = ref(controlStore.input);
watch(name, (n) => (controlStore.input = n));
</script>

<style scoped>
input::-moz-focus-inner {
  border: 0;
  padding: 0;
  margin-top: -2px;
  margin-bottom: -2px;
}

.text-input::-moz-placeholder {
  font-weight: 400;
  color: rgba(103, 110, 121, 0.502);
}

.text-input:-ms-input-placeholder {
  font-weight: 400;
  color: rgba(103, 110, 121, 0.502);
}

.text-input::placeholder {
  font-weight: 400;
  color: rgba(103, 110, 121, 0.502);
}

.text-input:not(.text-input-visible-placeholder):focus::-moz-placeholder {
  color: transparent;
}

.text-input:not(.text-input-visible-placeholder):focus:-ms-input-placeholder {
  color: transparent;
}

.text-input:not(.text-input-visible-placeholder):focus::placeholder {
  color: transparent;
}

.text-input {
  border: 1px solid #dbdedf;
  border-radius: 3px;
  font-size: 15px;
  height: 36px;
  padding: 8px 9px 7px;
  box-sizing: border-box;
  color: #313942;
  background: #fff;
}

.text-input--invalid {
  color: #f37575;
  border-color: #f37575;
}

.text-input:disabled {
  background: 0 0;
  border-color: #dfdfdf;
  border-bottom-width: 1px;
  color: #313942;
}
</style>
