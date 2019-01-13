
import waitFor from '~/utils/wait-for'
import faker from 'faker'

export const state = () => ({
  messages: [],
  loading: false,
  error: null
})

/// Common mutations
const clear = state => {
  state.messages = []
}

const addMessage = (state, msg) => state.messages.push(msg)

/// Exported mutations
export const mutations = {
  loadStart (state) {
    clear(state)
    state.loading = true
  },
  loadEnd (state) {
    state.loading = false
  },
  loadError (state, error) {
    state.error = error
    state.loading = false
  },
  set (state, messages) {
    messages.forEach(msg => addMessage(state, msg))
  },
  add: addMessage,
  clear: clear
}

export const actions = {
  async refresh ({ commit }) {
    commit('loadStart')
    await waitFor(668)

    const messages = []
    for (let i = 0; i <= 10; i++) {
      messages.push({
        from: faker.name.findName(),
        timestamp: null,
        subject: faker.lorem.sentence().substring(0, 40),
        snippet: faker.lorem.lines(),
        fullMail: faker.lorem.paragraphs(faker.random.number(40)),
        email: faker.internet.email()
      })
    }
    commit('set', messages)
    commit('loadEnd')
  }
}
