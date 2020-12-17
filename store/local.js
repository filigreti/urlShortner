export const state = () => ({
  counter: 1
});

export const mutations = {
  increment(state) {
    if (state.counter < 4) {
      state.counter += 1;
    }
  },
  decrement(state) {
    if (state.counter > 1) {
      state.counter -= 1;
    }
  }
};

export const getters = {
  getCounter: state => {
    return state.counter;
  }
};
