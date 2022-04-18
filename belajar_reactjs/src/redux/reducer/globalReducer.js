import ActionType from "./globalActionType";

const initialState = {
  totalOrder: 0,
};

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === ActionType.PLUS_ORDER) {
    return {
      ...state,
      totalOrder: state.totalOrder + 1,
    };
  }

  if (action.type === ActionType.MINUS_ORDER) {
    if (state.totalOrder > 0) {
      return {
        ...state,
        totalOrder: state.totalOrder - 1,
      };
    }
  }
  return state;
};

export default rootReducer;
