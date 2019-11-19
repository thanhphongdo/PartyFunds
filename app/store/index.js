import Vuex from 'vuex';
import EtherService from '../services/ether.service';
const contractConfig = require('./contract.config.json');
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
      },
      data: {
        members: [
          {
            value: 1,
            name: 'Phong Do'
          },
          {
            value: 2,
            name: 'Hoang Ng'
          },
          {
            value: 3,
            name: 'Tai Bui'
          }
        ]
      },
      model: {
        transaction: {
          member: null,
          members: null
        }
      }
    }),
    mutations: {
      initContract(state, privateKey) {
        contract.setPrivateKey(privateKey);
        contract.init();
        window.contract = contract;
      },
      callContract(state, { funcName, params, callback, error }) {
        try {
          if (params) {
            contract.contract[funcName](...params).then(data => {
              callback(data);
            }).catch(err => {
              error(err);
            });
          } else {
            contract.contract[funcName]().then(data => {
              callback(data);
            }).catch(err => {
              error(err);
            });
          }
        } catch (e) {
          error(e);
        }
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