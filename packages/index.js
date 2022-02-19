import SwButton from './components/sw-button'
import SwLoading from './components/sw-loading'
const components = [
  SwButton,
  SwLoading
]

const install = function (Vue, options = {}) {
  if (install.installed) return
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
