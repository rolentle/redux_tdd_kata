import { createStore } from 'redux';
import Todos, { ADD_TODO } from '../src/todos';

describe("Todos", () => {
  it("starts off with no todos", () => {
    const store = createStore(Todos);
    const state = store.getState();
    const todos = state.todos;
    expect(todos).toEqual([]);
  });

  it("adds a todo", () => {
    const store = createStore(Todos);
    const todo = { text: 'foo' }
    store.dispatch({type: ADD_TODO, payload: { todo }});
    const todos = store.getState().todos;
    expect(todos.length).toEqual(1);
    expect(todos[0].text).toEqual('foo');
  });
});
