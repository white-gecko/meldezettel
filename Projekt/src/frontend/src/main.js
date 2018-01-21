// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

import { Header,
  Aside,
  Main,
  Container,
  Menu,
  MenuItem,
  Table,
  TableColumn,
  Button,
  Form,
  FormItem,
  Select,
  Option
} from 'element-ui'

Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Container)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
