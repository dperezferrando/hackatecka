import { init } from "@rematch/core";
import { example } from "../models/example";
import { count } from "../models/count";

const store = init({
  models: {
    example,
    count
  }
});


export default store;