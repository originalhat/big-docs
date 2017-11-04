export default {
  search: (state, actions, {target}) => {
    return {query: target.value};
  }
};
