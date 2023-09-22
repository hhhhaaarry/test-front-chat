import { mount } from '@vue/test-utils'
import IconButton from '../IconButton.vue'

describe('IconButton.vue', () => {
  // Este test verifica si el componente se monta correctamente
  it('se monta correctamente', () => {
    const wrapper = mount(IconButton)
    expect(wrapper.html()).toMatchSnapshot();
  })

  // Este test verifica si el componente emite un evento cuando se hace clic en él
  it('emite un evento al hacer clic', async () => {
    const wrapper = mount(IconButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })
})