import { mount } from '@vue/test-utils'
import index from './index.vue'

describe('Infos.vue', () => {
  const wrapper = mount(index, {
    props: {
      username: 'franklion'
    }
  })

  test('has local-running-script', () => {
    expect(wrapper.text()).toContain('yarn dev')
  })  

  test('has project name', () => {
    expect(wrapper.text()).toContain('張育維-neutec-前端面試前測作業')
  })

  test('has Github page url', () => {
    expect(wrapper.text()).toContain('https://github.com/franklion/advance_practice')
  })

  test('has others repo url', () => {
    expect(wrapper.text()).toContain('https://github.com/franklion?tab=repositories')
  }) 
})
