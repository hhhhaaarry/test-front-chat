<template>
    <div
        class="modal container overflow-hidden min-w-0 sm:min-w-10 min-h-500 bg-slate-50 dark:bg-slate-900 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-slate-700 dark:text-slate-200 shadow-lg">
        <header
            class="modal__header header flex flex-row justify-center w-full relative border-b-[1px] border-slate-400 dark:border-slate-700 p-3 px-6">
            <h2 class="modal__title header__title text-center text-lg font-bold">Comentarios</h2>
            <IconButton class="modal__close header__close absolute top-1/2 right-2 transform -translate-y-1/2"
                @click="modalStore.toggleModal">
                <XMarkIcon class="h-6 w-6" />
            </IconButton>
        </header>
        <main
            class="modal__main chat flex flex-col-reverse justify-between gap-3 p-3 px-6 custom-scrollbar overflow-auto max-h-96 ">
            <ChatItem v-for="(message, index) in sortedMessages" :key="index" :message="message" />
        </main>
        <div
            class="modal__input flex flex-row p-3 px-6 gap-2 leading-none text-sm border-t-[1px] border-slate-400 dark:border-slate-700">
            <input type="text"
                class="input input--rounded w-full rounded-3xl bg-slate-100 dark:bg-slate-800 border-[1px] border-slate-400 dark:border-slate-700 px-3"
                placeholder="Escribe un mensaje" v-model="newMessage" />
            <IconButton @click="sendMessage">
                <PaperAirplaneIcon class="h-6 w-6 fill-blue-500 dark:fill-blue-300" />
            </IconButton>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import moment from 'moment'
import ChatItem from './ChatItem.vue'
import IconButton from './IconButton.vue'
import { XMarkIcon, PaperAirplaneIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/solid'
import { useModalStore } from '../store/modal'

const modalStore = useModalStore()
const props = defineProps({
    messages: {
        type: Array,
        required: true
    }
})

let sortedMessages = ref([])

let newMessage = ref()

const sendMessage = () => {
    if (newMessage.value && newMessage.value.trim() !== '') {
        // Obtiene el avatar del último mensaje del usuario actual
        const avatar = sortedMessages.value.find(message => message.from === 'jid_1111')?.avatar || ''

        sortedMessages.value.unshift({
            type: 'text',
            from: 'jid_1111',
            text: newMessage.value, timestamp: moment().format(),
            avatar: avatar
        })
        newMessage.value = ''
    }
}

onMounted(() => {
    sortedMessages.value = props.messages.sort((a, b) => moment(b.timestamp) - moment(a.timestamp))
})
</script>
<style scoped>
.modal {
    max-width: calc(100% - 4rem);

    @media (min-width: 640px) {
        max-width: 600px;
    }
}
</style>
```

