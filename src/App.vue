<template>
  <div id="main" class="w-full h-full flex flex-col justify-center items-center bg-slate-200 dark:bg-slate-800 p-4">
    <button
      class="toggle-modal w-fit bg-slate-50 dark:bg-slate-900 hover:border-blue-500 dark:hover:border-blue-300 text-slate-700 dark:text-slate-200"
      @click="modalStore.toggleModal">Open Modal</button>
    <CommentsModal :messages="messages" v-show="modalStore.modal" />
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount } from 'vue'
import CommentsModal from './components/CommentsModal.vue'
import json from './data/messages.json'
import { useModalStore } from './store/modal'

const modalStore = useModalStore()

const messages = ref(json)

const setViewportHeight = () => {
  document.documentElement.style.setProperty(
    '--app-height',
    window.innerHeight + 'px'
  );
};

const onResize = () => {
  setViewportHeight();
};


onMounted(async () => {
  await nextTick();
  onResize();
  window.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize);
});







</script>



<style>
#app {
  width: 100vw;
  height: var(--app-height);
  padding: 0;
  margin: 0;
}

#main {
  height: 100%;
  width: 100%;
}</style>
