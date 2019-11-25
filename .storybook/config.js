// import centered from '@storybook/addon-centered/vue'
// // import { INITIAL_VIEWPORTS, configureViewport } from '@storybook/addon-viewport'

import '!style-loader!css-loader!sass-loader!../assets/variables.scss'

import Vuetify, { VApp } from 'vuetify/lib'
import { addDecorator, addParameters, configure } from '@storybook/vue'

import Vue from 'vue'
import Vuex from 'vuex'
import vuetify from '../plugins/storybookVuetify'

// import '@mdi/font/css/materialdesignicons.css'

const vuetifyViewports = {
  VuetifyXs: {
    name: 'Vuetify XS',
    styles: {
      width: '600px'
    },
    type: 'mobile'
  },
  VuetifySm: {
    name: 'Vuetify SM',
    styles: {
      width: '960px'
    },
    type: 'mobile'
  },
  VuetifyMd: {
    name: 'Vuetify MD',
    styles: {
      width: '1264px'
    },
    type: 'tablet'
  },
  VuetifyLg: {
    name: 'Vuetify LG',
    styles: {
      width: '1904px'
    },
    type: 'desktop'
  },
  VuetifyXl: {
    name: 'Vuetify XL',
    styles: {
      width: '4096px'
    },
    type: 'desktop'
  }
}

// Vue.use(Vuetify, {
//   components: {
//     VApp
//   }
// })

// configureViewport({
//   defaultViewport: 'VuetifyMd',
//   viewports: {
//     ...vuetifyViewports,
//     ...INITIAL_VIEWPORTS
//   }
// })

addDecorator(() => ({
  vuetify: vuetify,
  template: '<v-app style="background-color: transparent;"><story/></v-app>',
  style: '.theme--light.application {background-color: transparent;}'
}))

addParameters({
  backgrounds: [
    { name: 'Twitter', value: '#00aced' },
    { name: 'Facebook', value: '#3b5998' },
    { name: 'Green', value: '#8CCD30' },
    { name: 'Dark Grey', value: '#4F525D' },
    { name: 'Black', value: '#000' }
  ]
})

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
