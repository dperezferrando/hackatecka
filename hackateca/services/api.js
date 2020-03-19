import Promise from "bluebird";

export default class Api {

  incrementStock({ nombre, cantidad }) {
    return Promise.resolve({ nombre, cantidad: cantidad + 1 })
      .delay(1000);
  }
}