<template>
    <div v-if="message.type === 'text'"
        class="chat-item rounded-sm p-2 max-w-full w-full text-left flex flex-row justify-end items-center gap-3 text-slate-700 dark:text-white"
        :class="message.from === 'jid_1109' ? 'chat-item--recieved flex-row-reverse' : 'chat-item--sent'">
        <div class="chat-item__blob p-3 px-6 relative text-base leading-tight flex flex-col gap-1 max-w-[85%]"
            :class="message.from === 'jid_1109' ? 'bg-slate-200 dark:bg-gray-800' : 'bg-blue-600 text-white'">
            <div class="chat-item__text ">{{ message.text }}</div>
            <div class="chat-item__timestamp">
                <span class="text-xs dark:text-gray-300">{{ moment(message.timestamp).locale('es').format("DD MMM YYYY / HH: mm") }}</span>
            </div>
        </div>
        <div class="chat-item__avatar h-6 w-6 flex shrink-0 rounded-2xl overflow-hidden">
            <img class="w-full h-full object-cover object-center" :src="message.avatar" alt="">
        </div>
    </div>
    <div v-else-if="message.type === 'file'"
        class="chat-item rounded-sm max-w-full text-left w-full border-y-[1px] border-slate-200 dark:border-gray-700 p-3 flex flex-row items-center"
        :class="message.from === 'jid_1109' ? 'chat-item--recieved ' : 'chat-item--sent'">
        <div class="chat-item__text flex flex-col gap-1">
            <span class="font-bold uppercase dark:text-gray-300">Version {{ message.attachment.version }}</span>
            <span class="text-blue-500 font-bold dark:text-blue-400">{{ message.attachment.name }}</span>
            <span class="dark:text-gray-300">{{ message.attachment.format }} ({{ message.attachment.size }}) {{
                moment(message.timestamp).locale('es').format('DD MMM YYYY / HH:mm')
            }}</span>
        </div>
        <div class="chat-item__actions ml-auto">
            <IconButton @click="console.log('su descarga ha comenzado')">
                <ArrowDownTrayIcon class="h-6 w-6 fill-blue-600 dark:fill-blue-400" />
            </IconButton>
        </div>
    </div>
</template>

<script setup>
import moment from 'moment'
import { ref, onMounted } from 'vue'
import IconButton from './IconButton.vue'
import { ArrowDownTrayIcon } from '@heroicons/vue/24/solid'
const props = defineProps({
    message: {
        type: Object,
        required: true
    },
})
</script>
<style scope>
.chat-item--sent .chat-item__blob::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    top: 50%;
    right: -0.5rem;
    transform: translateY(-50%);
    border-top: 0.5rem solid transparent;
    border-left: 0.5rem solid theme( 'colors.blue.600');
    border-bottom: 0.5rem solid transparent;
}
</style>

