import { defineStore } from 'pinia';

export const useEntitiesStore = defineStore('EntitiesStore', {
  state: () => ({
    entities: JSON.parse(localStorage.getItem('entities') || '[]'),
    types: [
      { label: 'Не выбрано', value: 'not_chosen' },
      { label: 'Сделка', value: 'lead' },
      { label: 'Контакт', value: 'contact' },
      { label: 'Компания', value: 'company' },
    ],
  }),
});
