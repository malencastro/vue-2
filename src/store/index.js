import Vue from 'vue'
import Vuex from 'vuex'
import * as userModule from '@/store/modules/userModule.js'
import * as eventModule from '@/store/modules/eventModule.js'
import * as notification from '@/store/modules/notification.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userModule,
    eventModule,
    notification,
  },
  state: {
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community',
    ],
  },
})
