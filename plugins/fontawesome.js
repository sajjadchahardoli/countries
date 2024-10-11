import { library } from '@fortawesome/fontawesome-svg-core'
import { faMoon, faSearch, faChevronDown, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faMoon, faSearch, faChevronDown, faArrowLeft)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
