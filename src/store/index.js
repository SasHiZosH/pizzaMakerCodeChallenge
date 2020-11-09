import { createStore } from 'redux';

const INITIAL_STATE = {
  size: '',
  format: '',
  border: '',
  filling: '',
  topping: [],
  points: 0,
};

function order(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_SIZE':
      return { ...state, size: action.choice };
    case 'ADD_FORMAT':
      return { ...state, format: action.choice };
    case 'ADD_BORDER':
      return { ...state, border: action.choice };
    case 'ADD_FILLING':
      return { ...state, filling: action.choice };
    case 'ADD_TOPPING':
      return { ...state, topping: [...action.choice] };
    case 'ADD_SUGGESTION':
      return { 
        size: action.choice.sizes,
        format: action.choice.format,
        border: action.choice.border.options,
        filling: action.choice.border.filling,
        topping: action.choice.toppings, 
        points: action.choice.points
      };
      case 'CLEAR':
        return {
          size: INITIAL_STATE.size,
          format: INITIAL_STATE.format,
          border: INITIAL_STATE.border,
          filling: INITIAL_STATE.filling,
          topping: INITIAL_STATE.topping, 
          points: INITIAL_STATE.points
        } 
    default: 
      return state;
  }
}

const store = createStore(order);

export default store;