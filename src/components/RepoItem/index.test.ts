import { mount } from '@vue/test-utils'
import index from './index.vue'

describe('RepoItem.vue', () => {
  const wrapper = mount(index, {
    props: {
      repoItem: {
        id: 32011321,
        name: "advance_practice",
        description: "合併之前html5 css3 project ",
        html_url: "https://github.com/franklion/advance_practice",
      }
    }
  })

  test('has title', () => {
    expect(wrapper.text()).toContain('advance_practice')
  })

  test('has description', () => {
    expect(wrapper.text()).toContain('合併之前html5 css3 project ')
  })

  test('has url', () => {
    const a = wrapper.find('a')
    expect(a.text()).toContain('https://github.com/franklion/advance_practice')
    expect(a.attributes('href')).toBe('https://github.com/franklion/advance_practice')
  })
})
