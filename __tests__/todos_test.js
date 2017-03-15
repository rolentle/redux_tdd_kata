import { createStore } from 'redux';
import Todos from '../src/todos';

describe("Todos", () => {
  it("starts off with no todos", () => {
    const store = createStore(Todos);
    const state = store.getState();
    const todos = state.todos;
    expect(todos).toEqual([]);
  });
});
