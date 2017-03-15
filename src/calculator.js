export const ADDITION = 'addition';
export const SUBTRACTION = 'substraction';
export const MULTIPLICATION = 'multiplication';
export const DIVISION = 'division';

export default function(state=0, action) {
  switch(action.type) {
    case ADDITION:
      return state + action.payload;
    case SUBTRACTION:
      return state - action.payload;
    case MULTIPLICATION:
      return state * action.payload;
    case DIVISION:
      return state / action.payload;
    default:
      return state;
  }
};
