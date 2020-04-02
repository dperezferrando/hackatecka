import { init } from "@rematch/core";
import { example } from "../models/example";
import { capsulitas } from "../models/capsulitas";

const store = init({
  models: {
    example,
    capsulitas
  }
});


export default store;