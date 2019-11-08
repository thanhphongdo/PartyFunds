import Vuex from 'vuex';
import EtherService from '../services/ether.service';
const contractConfig = require('./contract.config.js');
const contract = new EtherService(contractConfig.url, contractConfig.contractAddress, contractConfig.contractABI);
const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      locales: ['vn', 'fr'],
      locale: 'vn',
      contractConfig: contractConfig,
      page: {
        transaction: false,
        history: false,
        account: false
      }
    }),
    mutations: {
      initContract(state, privateKey) {
        contract.setPrivateKey(privateKey);
        contract.init();
      },
      SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
          state.locale = locale
        }
      },
      setPage(state, page) {
        let keys = Object.keys(state.page);
        keys.forEach(key => {
          state.page[key] = false;
        });
        state.page[page] = true;
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

          }
        },
        getters: {
          toClass(state) {

          }
        }
      }
    }
  });
}

export default createStore;