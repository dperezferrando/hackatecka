import { createEpicMiddleware } from 'redux-observable';
import { init } from "@rematch/core";
import example from "../reducers/example";
import { example as exampleModel } from "../models/example";
import rootEpic from "../epics";

const epicMiddleware = createEpicMiddleware();

const store = init({
  models: {
    example: exampleModel
  },
  redux: {
    reducers: {
      example,
      //el que hayan agregado
    },
    middlewares: [epicMiddleware]
  },
});

epicMiddleware.run(rootEpic);

export default store;