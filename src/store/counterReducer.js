//Actions
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const DELETE = "delete";
export const RESET = "reset";

//Initialstate

const initialState = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ],
};

//Reducer
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      const counters = [...state.counters];
      const index = state.counters.indexOf(action.payload.counter);
      counters[index] = { ...action.payload.counter };
      counters[index].value++;
      return {
        ...state,
        counters,
      };
    case DECREMENT:
      const counterss = [...state.counters];
      const indexx = state.counters.indexOf(action.payload.counter);
      counterss[indexx] = { ...action.payload.counter };
      counterss[indexx].value--;
      return {
        ...state,
        counters: counterss,
      };
    case DELETE:
      return {
        ...state,
        counters: state.counters.filter(
          (counter) => counter.id !== action.payload.counter.id
        ),
      };
    case RESET:
      const countersReset = [...state.counters];
      for (let counter of countersReset) counter.value = 0;
      return {
        ...state,
        counters: countersReset,
      };
    default:
      return state;
  }
};

export default counterReducer;
