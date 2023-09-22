import { defineStore } from "pinia";
export const useModalStore = defineStore("modal", {
  state: () => ({
    modal: false,
  }),
  actions: {
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    toggleModal() {
      this.modal = !this.modal;
    },
  },
  getters: {
    getModal() {
      return this.modal;
    },
  },
});
