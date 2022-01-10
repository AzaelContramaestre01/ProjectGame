import Vue from 'vue'
import VueMq from 'vue-mq'

Vue.use(VueMq, {
  breakpoints: {
    xs: 380,
    sm: 576,
    md: 768,
    lg: 1024,
    xl: 1200,
    xxl: Infinity,
  },
  defaultBreakpoint: 'lg',
})
