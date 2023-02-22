import { defineStore } from 'pinia';

export const useControlStore = defineStore('ControlStore', {
  state: () => ({
    selectedOption: undefined,
    selectIsOpen: false,
    input: '',
  }),
});
