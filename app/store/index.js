import Vuex from 'vuex';
const contractConfig = require('./contract.config.js');

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      locales: ['vn', 'fr'],
      locale: 'vn',
      contractConfig: contractConfig
    }),
    mutations: {
      increment(state) {
        // state.counter++
      },
      SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
          state.locale = locale
        }
      }
    },
    modules: {
      cmpStyle: {
        namespaced: true,
        state: () => ({
          style: []
        }),
        mutations: {
          set(state, { cmpName, style }) {
            // console.log(cmpName);
            // state.style[cmpName] = style;
            const currentCmpStyle = state.style.find(item => {
              return item.cmpName === cmpName;
            });
            console.log(cmpName);
            if (currentCmpStyle) {
              currentCmpStyle.style = style;
            } else {
              state.style.push({
                cmpName: cmpName,
                style: style
              });
            }
          }
        },
        getters: {
          toClass(state) {
            return (cmpName) => {
              return state.style.find(item => {
                return item.cmpName === cmpName;
              });
            }
          }
        }
      }
    }
  });
}

export default createStore;