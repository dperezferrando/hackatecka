import Promise from "bluebird";

export const example = {
  state: { message: "" },
  reducers: {
    set: (state, payload) => ({ ...state, message: payload })
  },
  effects: dispatch => ({
       test(payload, rootState) {
         Promise.resolve("TEST!")
         .delay(2000)
         .tap(message => dispatch.example.set(message))
      }
  })
}