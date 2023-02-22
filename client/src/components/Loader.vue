<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="loader" :style="cssVars"></div>
</template>
<script setup>
import { defineProps, computed } from 'vue';
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  color: {
    type: String,
    require: true,
    default: () => {
      return '#158fd2';
    },
  },
});
const cssVars = computed(() => {
  return {
    '--color': props.color,
  };
});
</script>
<style scoped>
.loader:after {
  content: '';
  width: 16px;
  height: 16px;
  margin-top: -1px;
  display: block;
  z-index: calc(1000 + 2);
  border: solid 2px transparent;
  border-top-color: var(--color);
  border-left-color: var(--color);
  border-radius: 100%;
  -webkit-animation: nprogress-spinner 900ms linear infinite;
  animation: nprogress-spinner 900ms linear infinite;
}
@-webkit-keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
