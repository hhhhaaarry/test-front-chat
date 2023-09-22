import { mount } from "@vue/test-utils";
import ChatItem from "../ChatItem.vue";

// Vamos a crear algunos tests unitarios para el componente ChatItem
describe("ChatItem.vue", () => {
  // Este test verifica si el componente se monta correctamente
  // Este test verifica si el mensaje se muestra correctamente
  it("muestra el mensaje correctamente", () => {
    const message = {
      type: "text",
      text: "Hola, mundo!",
      from: "jid_1109",
      timestamp: new Date(),
      avatar: "https://example.com/avatar.jpg",
    };
    const wrapper = mount(ChatItem, {
      propsData: { message },
    });
    expect(wrapper.text()).toMatch(message.text);
  });

  // Este test verifica si el avatar se muestra correctamente
  it("muestra el avatar correctamente", () => {
    const message = {
      type: "text",
      text: "Hola, mundo!",
      from: "jid_1109",
      timestamp: new Date(),
      avatar: "https://example.com/avatar.jpg",
    };
    const wrapper = mount(ChatItem, {
      propsData: { message },
    });
    expect(wrapper.find(".chat-item__avatar img").attributes().src).toBe(
      message.avatar
    );
  });

  // Este test verifica si el mensaje se muestra correctamente para 'jid_1109'
  it("muestra el mensaje correctamente para jid_1109", () => {
    const message = {
      type: "text",
      text: "Hola, mundo!",
      from: "jid_1109",
      timestamp: new Date(),
      avatar: "https://example.com/avatar.jpg",
    };
    const wrapper = mount(ChatItem, {
      propsData: { message },
    });
    expect(wrapper.find(".chat-item--recieved").exists()).toBe(true);
  });

  // Este test verifica si el mensaje se muestra correctamente para un usuario distinto de 'jid_1109'
  it("muestra el mensaje correctamente para un usuario distinto de jid_1109", () => {
    const message = {
      type: "text",
      text: "Hola, mundo!",
      from: "jid_1110",
      timestamp: new Date(),
      avatar: "https://example.com/avatar.jpg",
    };
    const wrapper = mount(ChatItem, {
      propsData: { message },
    });
    expect(wrapper.find(".chat-item--sent").exists()).toBe(true);
  });
  // Este test verifica si el mensaje de tipo 'file' se muestra correctamente
  it("muestra el mensaje de tipo file correctamente", () => {
    const message = {
      type: "file",
      from: "jid_1109",
      timestamp: new Date(),
      attachment: {
        version: "1.0",
        name: "Archivo",
        format: "pdf",
        size: "1MB",
      },
    };
    const wrapper = mount(ChatItem, {
      propsData: { message },
    });
    expect(wrapper.find(".chat-item__text").text()).toContain(
      message.attachment.name
    );
    expect(wrapper.find(".chat-item__text").text()).toContain(
      message.attachment.version
    );
    expect(wrapper.find(".chat-item__text").text()).toContain(
      message.attachment.format
    );
    expect(wrapper.find(".chat-item__text").text()).toContain(
      message.attachment.size
    );
  });
});
