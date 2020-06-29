import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  
  icons: {
    iconfont: 'mdi',
  },

  theme: {
    options: {
      customProperties: true,
    },
    dark: true,
    themes: {
      dark: {
        primary: "#08FDD8",
        secondary: "#1B3430",
        form: "#2B2B2B",
        navigation: "#181818",
        background:"#1D1D1D",
        text: "DADADA"
      },
      light: {
        primary: "#1D1D1D",
        secondary: "#1B3430",
        navigation: "#181818",
        background:"#EEEEEE",
        text: "1D1D1D"
      
      }
    },
    
  }
  
});
