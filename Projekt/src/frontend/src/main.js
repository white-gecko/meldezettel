// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'

import store from '@/store'

import lang from 'element-ui/lib/locale/lang/de'
import locale from 'element-ui/lib/locale'

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
  Option,
  Checkbox,
  CheckboxGroup,
  Row,
  Col,
  Switch,
  DatePicker,
  TimePicker,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Collapse,
  CollapseItem,
  CheckboxButton
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
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Row)
Vue.use(Col)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(TimePicker)
Vue.use(Input)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(CheckboxButton)

Vue.config.productionTip = false

locale.use(lang)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
