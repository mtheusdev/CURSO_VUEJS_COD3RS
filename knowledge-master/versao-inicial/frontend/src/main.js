import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'
import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'
import './config/msgs'


Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkFuYSBDbGFyYSBCYXJib3NhIGRvcyBTYW50b3MiLCJlbWFpbCI6ImFuYUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjE2NTUwODYwLCJleHAiOjE2MTY4MTAwNjB9.8XR9j3eBAX4JRwudREH5100MZXGN1KndnZ-HQrSXaI4' 

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')