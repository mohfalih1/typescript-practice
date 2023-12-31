/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: "#9AC5F4",
          secondary: "#99DBF5",
          textColor: "#FFEEBB",
          background: "#FFFFFF",
        },
      },
      dark: {
        colors: {
          primary: "#495C83",
          secondary: "#99DBF5",
          textColor: "#FFEEBB",
          background: "#000000",
        },
      },
    },
  },
});

// import { createApp } from "vue";
// import { createVuetify, ThemeDefinition } from "vuetify";

// const myCustomLightTheme: ThemeDefinition = {
//   dark: false,
//   colors: {
//     background: "#FFFFFF",
//     surface: "#FFFFFF",
//     primary: "#6200EE",
//     "primary-darken-1": "#3700B3",
//     secondary: "#03DAC6",
//     "secondary-darken-1": "#018786",
//     error: "#B00020",
//     info: "#2196F3",
//     success: "#4CAF50",
//     warning: "#FB8C00",
//   },
// };

// export default createVuetify({
//   theme: {
//     defaultTheme: "myCustomLightTheme",
//     themes: {
//       myCustomLightTheme,
//     },
//   },
// });
