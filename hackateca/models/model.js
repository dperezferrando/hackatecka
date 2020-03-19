export default {
  state: "",
  reducers: {
    set: (state, payload) => payload.message
  },
  effects: {
    test: (payload, rootState) => {
      Promise.resolve("ASYNC MESSAGE").delay(2000)
      .then(message => this.set(message))
    }
  }
}