import { Types } from "../actions/example";

 export default (state = { message: "" }, action) => {
    switch(action.type) {
      case Types.SET:
        return {...state, message: action.message }
      default: return state;
    }
 }