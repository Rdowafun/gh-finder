import {
  createStore
} from 'vuex'
import axios from 'axios'

const store = createStore({
  state: {
    userInfo: null,
    error: null,
    repositories: null,
    currentSort: 'name',
    currentSortDir: 'asc',
    noRep: null
  },
  mutations: {
    getUserInfo(state, payload) {
      state.userInfo = payload
      state.error = null
    },
    getErrorInfo(state, error) {
      if (error.response.status == 403) {
        state.error = 'Ошибка 403,Вы были заблокированы на какое то время'
        state.userInfo = null
      } else {
        state.error = 'Такой пользователь не найден'
        state.repositories = state.userInfo = null
      }
    },
    getUserRepos(state, repos) {
      if (repos.length == 0) {
        state.noRep = 'Нет Репозиторий'
      } else {
        state.noRep = null
      }

      state.repositories = repos
    },
    sort(state, event) {
      if (state.currentSort == event) {
        state.currentSortDir = state.currentSortDir == 'asc' ? 'desc' : 'asc'
      } else {
        state.currentSort = event
      }
    }
  },
  actions: {
    async getUserInfo(context, search) {
      try {
        const res = await axios.get(`https://api.github.com/users/${search}`)
        const res2 = await axios.get(`https://api.github.com/users/${search}/repos`)
        const info = res.data;
        const repos = res2.data
        console.log(repos);
        context.commit('getUserRepos', repos)
        context.commit('getUserInfo', info)
      } catch (error) {
        console.log(error);
        context.commit('getErrorInfo', error)
      }

    }
  },
  getters: {
    getUser(state) {
      return state.userInfo
    },
    getError(state) {
      return state.error
    },
    getRepos(state) {
      return state.repositories
    },
    getNoRep(state) {
      return state.noRep
    },
    getRepoSort(state, getters) {
      if (getters.getRepos != null) {
        return state.repositories.sort((prev, next) => {
          let mod = 1
          if (state.currentSortDir == 'desc') mod = -1
          if (prev[state.currentSort] < next[state.currentSort]) {
            return -1 * mod
          }
          if (prev[state.currentSort] > next[state.currentSort]) {
            return 1 * mod
          }
        })
      }
    }
  }
})

export default store