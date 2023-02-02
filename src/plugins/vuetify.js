/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
            primary: "#D50000",
            secondary: "#388E3C",
            "on-secondary": "#CFD8DC",
            success: "#56CA00",
            info: "#16B1FF",
            warning: "#FFB400",
            error: "#FF4C51",
        },
      },
    },
  },
})
