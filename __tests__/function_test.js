import { createStore } from 'redux';
import Caculator, { ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION } from '../src/index';

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

  it("can substract 0 - 1 = -1", () => {
    const store = createStore(Caculator);
    store.dispatch({type: SUBTRACTION, payload: 1 });
    const state = store.getState();
    expect(state).toBe(-1);
  });

  it("can multiple  2 * 2 = 4", () => {
    const store = createStore(Caculator, 2);
    store.dispatch({type: MULTIPLICATION, payload: 2 });
    const state = store.getState();
    expect(state).toBe(4);
  });

  it("can divide  2 / 2 = 1", () => {
    const store = createStore(Caculator, 2);
    store.dispatch({type: DIVISION, payload: 2 });
    const state = store.getState();
    expect(state).toBe(1);
  });
});
