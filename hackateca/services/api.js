import Promise from "bluebird";

export default class Api {

  incrementStock({ nombre, cantidad }, qty) {
    return Promise.resolve({ nombre, cantidad: cantidad + qty })
      .delay(1000);
  }
}