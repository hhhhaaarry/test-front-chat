import { mount } from "@vue/test-utils";
import { useModalStore } from "../../store/modal";
import CommentsModal from "../CommentsModal.vue";
import { createPinia } from "pinia";

describe("CommentsModal.vue", () => {
  let wrapper;

  beforeEach(() => {
    const pinia = createPinia();
    const modalStore = useModalStore(pinia); // Pasa la instancia de Pinia a useModalStore

    wrapper = mount(CommentsModal, {
      propsData: {
        messages: [
          {
            type: "text",
            from: "jid_1111",
            text: "Hola",
            timestamp: "2022-01-01T00:00:00Z",
            avatar: "avatar.png",
          },
        ],
      },
      global: {
        plugins: [pinia], // Instala Pinia en el contexto de la prueba
        provide: {
          modalStore: {
            toggleModal: modalStore.toggleModal,
            getModal: modalStore.getModal,
            modal: modalStore.modal,
          },
        },
      },
    });
  });

  // Verifica que el componente se renderiza correctamente
  it("se renderiza correctamente", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  // Verifica que el modal se abre cuando pulsas el botón
  it("se abre el modal cuando pulsas el botón", async () => {
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.vm.modalStore.modal).toBe(true);
  });

  // Verifica que el modal se cierra cuando pulsas el botón
  it("se cierra el modal cuando pulsas el botón", async () => {
    const button = wrapper.find("button");
    await button.trigger("click");
    expect(wrapper.vm.modalStore.modal).toBe(true);
    await button.trigger("click");
    expect(wrapper.vm.modalStore.modal).toBe(false);
  });
  // Verifica que se envía un mensaje cuando se hace clic en el botón de enviar
  it("envía un mensaje al hacer clic en el botón de enviar", async () => {
    const input = wrapper.find(".modal__input input");
    const sendButton = wrapper.find(".modal__input button");
    await input.setValue("Hola mundo");
    await sendButton.trigger("click");
    expect(wrapper.vm.sortedMessages[0].text).toBe("Hola mundo");
  });
  // Verifica que los mensajes se ordenan por timestamp
  it("ordena los mensajes por timestamp", () => {
    const messages = wrapper.vm.sortedMessages;
    for (let i = 0; i < messages.length - 1; i++) {
      expect(messages[i].timestamp).toBeGreaterThanOrEqual(
        messages[i + 1].timestamp
      );
    }
  });
  // Verifica que el input se limpia después de enviar un mensaje
  it("limpia el input después de enviar un mensaje", async () => {
    const input = wrapper.find(".modal__input input");
    const sendButton = wrapper.find(".modal__input button");

    await input.setValue("Hola mundo");
    await sendButton.trigger("click");

    expect(input.element.value).toBe("");
  });
});
