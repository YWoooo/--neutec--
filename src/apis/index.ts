import axios from 'axios'
import githubApi from './github.api'
import { App } from 'vue'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $api: typeof $api
  }
}

export const axiosInstance = axios.create()
export const $api = {
  ...githubApi
}

export default {
  install: (app: App) => {
    app.config.globalProperties.$api = $api
  }
}
