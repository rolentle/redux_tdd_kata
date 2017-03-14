import { createStore } from 'redux';
import Caculator, { ADDITION } from '../src/index';

describe("Caculator", () => {
  it("initalizes at 0", () => {
    const store = createStore(Caculator);
    const state = store.getState();
    expect(state).toBe(0);
  });

  it("can add 0 + 1 = 1", () => {
    const store = createStore(Caculator);
    store.dispatch({type: ADDITION, payload: 1 });
    const state = store.getState();
    expect(state).toBe(1);
  });

  it("can add 1 + 1 = 2", () => {
    const store = createStore(Caculator);
    store.dispatch({type: ADDITION, payload: 1 });
    store.dispatch({type: ADDITION, payload: 1 });
    const state = store.getState();
    expect(state).toBe(2);
  });
});
