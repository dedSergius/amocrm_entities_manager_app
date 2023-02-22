<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button
    type="button"
    :class="[
      'button-input',
      {
        'button-input_blue': controlStore.selectedOption.value !== 'not_chosen',
      },
    ]"
    :disabled="controlStore.selectedOption.value === 'not_chosen'"
    @click="
      apiStore.addEntity({
        type: controlStore.selectedOption.value,
        name: controlStore.input,
      })
    "
  >
    <Loader :color="'white'" v-if="apiStore.isLoading" />
    <span class="button-input-inner" v-if="!apiStore.isLoading">Создать</span>
  </button>
</template>

<script setup>
import { useControlStore } from '../stores/ControlStore.js';
import { useApiStore } from '../stores/ApiStore.js';
import Loader from './Loader.vue';
const controlStore = useControlStore();
const apiStore = useApiStore();
</script>

<style scoped>
.button-input {
  position: relative;
  z-index: 1;
  display: inline-block;
  max-height: 38px;
  padding: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  white-space: nowrap;
  vertical-align: middle;
  text-decoration: none;
  color: #2e3640;
  border: 1px solid #dbdedf;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.button-input + .button-input {
  margin-left: 7px;
}

.button-input,
.button-input:active,
.button-input:hover {
  background: #fcfcfc;
}

.button-input-inner {
  display: inline-flex;
  align-items: center;
  position: relative;
}

.button-input-inner .icon,
.button-input-inner .svg-icon {
  margin-right: 7px;
}

.button-input-wrapper {
  position: relative;
  display: inline-block;
}

.button-input__spinner {
  position: relative;
  margin: auto;
  height: 14px;
  width: 12px;
}

.button-input__spinner__icon {
  position: absolute;
  top: -3px;
  left: -4px;
}

.button-input:not(.button-input-disabled):active {
  transform: translateY(1px);
}

.button-input.button-input-disabled {
  cursor: default;
  color: #2e3640;
  opacity: 0.6;
}

.button-input.button-input-disabled .icon,
.button-input.button-input-disabled:after {
  display: none;
}

.button-input.button-input-disabled .button-input-inner {
  padding: 0;
}

.button-input.button-input-saved,
.button-input.button-input-saved:active,
.button-input.button-input-saved:hover {
  background: #e5b023 !important;
  border-color: #d2a01a !important;
  color: #fff !important;
}

.button-input_blue:not(.button-input-disabled) {
  border: 1px solid #4077d6;
  background: #4c8bf7;
  color: #fff;
}

.button-input_blue:not(.button-input-disabled):active,
.button-input_blue:not(.button-input-disabled):hover {
  background: #4d85e6;
}

.button-input_blue:not(.button-input-disabled) .spinner-icon {
  border-top-color: #fff;
  border-left-color: #fff;
}
</style>
