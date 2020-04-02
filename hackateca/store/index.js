import { init } from "@rematch/core";
import { example } from "../models/example";

const store = init({
  models: {
    example
  }
});


export default store;