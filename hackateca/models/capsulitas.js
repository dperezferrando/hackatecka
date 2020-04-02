import Promise from "bluebird";
import _ from "lodash";
import initialState from "../data/capsulitas";
import Api from "../services/api";
const api = new Api();

export const capsulitas = {
  state: _.orderBy(initialState, "nombre"),
  reducers: {
    set: (state, payload) => _(state)
      .reject({ nombre: payload.nombre })
      .concat(payload)
      .orderBy("nombre")
      .value()
  },
  effects: dispatch => ({
       increment({ item, qty }, rootState) {
         api.incrementStock(item, qty)
         .tap(stock => dispatch.capsulitas.set(stock))
      }
  })
}