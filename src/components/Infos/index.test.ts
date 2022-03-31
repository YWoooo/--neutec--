import { mount } from '@vue/test-utils'
import index from './index.vue'

describe('Infos.vue', () => {
  const wrapper = mount(index, {
    props: {
      username: 'franklion'
    }
  })
  const [githubUrl, githubPageUrl, othersRepoUrl] = wrapper.findAll('a')

  test('has local-running-script', () => {
    expect(wrapper.text()).toContain('yarn dev')
  })  

  test('has project name and Github url', () => {
    expect(githubUrl.text()).toContain('張育維-neutec-前端面試前測作業')
    expect(githubUrl.attributes('href')).toBe('https://github.com/YWoooo/neutec-test')
  })

  test('has Github page url', () => {
    expect(githubPageUrl.text()).toContain('https://ywoooo.github.io/neutec-test/')
    expect(githubPageUrl.attributes('href')).toBe('https://ywoooo.github.io/neutec-test/')
  })

  test('has others repo url', () => {
    expect(othersRepoUrl.text()).toContain('https://github.com/franklion?tab=repositories')
    expect(othersRepoUrl.attributes('href')).toBe('https://github.com/franklion?tab=repositories')
  }) 
})
