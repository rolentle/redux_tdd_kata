export const ADDITION = 'addition';
export const SUBTRACTION = 'substraction';

export default function(state=0, action) {
  switch(action.type) {
    case ADDITION:
      return state + action.payload;
    case SUBTRACTION:
      return state - action.payload;
    default:
      return state;
  }
};
