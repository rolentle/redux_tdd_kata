import { createStore } from 'redux';

describe("Caculator", () => {
it("initalizes at 0", () => {
  const store = createStore(() => 0)
  const state = store.getState()
  expect(state).toBe(0);
});
});
