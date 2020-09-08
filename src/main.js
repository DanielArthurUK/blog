// Import main css
import '~/assets/style/index.scss'
import '@fortawesome/fontawesome-free/css/all.min.css'

// import 'gridsome-plugin-remark-prismjs-all/themes/night-owl.css'
// import 'prismjs/themes/prism-solarizedlight.css'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

// Import default layout so we don't need to import it to every page
import DefaultLayout from '~/layouts/Default.vue'

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function (Vue, { router, head, isClient }) {
  
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}