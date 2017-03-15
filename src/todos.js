const initialState = {todos: []};
export const ADD_TODO = 'ADD_TODO';

function addTodo(state, todo) {
      return Object.assign({}, state, { todos: [todo, ...state.todos]});
}
export default function(state=initialState, action) {
  switch(action.type) {
    case  ADD_TODO:
      return addTodo(state, action.payload.todo);
    default:
      return state;
  }
};
