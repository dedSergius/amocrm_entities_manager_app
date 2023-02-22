import { defineStore } from 'pinia';
import { useEntitiesStore } from '../stores/EntitiesStore';
import { useControlStore } from '../stores/ControlStore';

import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';

export const useApiStore = defineStore('ApiStore', {
  state: () => ({
    isLoading: false,
  }),
  actions: {
    async addEntity(entity) {
      this.isLoading = true;
      try {
        const results = await fetch('http://localhost/api/entities', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(entity),
        });
        const data = await results.json();
        const entitiesStore = useEntitiesStore();
        const controlStore = useControlStore();
        this.isLoading = false;
        entitiesStore.entities.push(data);
        controlStore.input = '';
        alertify.success('Создано');
      } catch (error) {
        console.log(error);
        alertify.error(error);
      }
    },
  },
});
