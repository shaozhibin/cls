// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import '../static/css/style.css'

// rem设置 1rem == 100px
(function(d,a){var e="orientationchange"in a?"orientationchange":"resize",b=d.documentElement,c=function(){b.clientWidth;b.style.fontSize=a.innerWidth/750*75+"px"};c();a.addEventListener(e,c,!1)})(document,window);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
