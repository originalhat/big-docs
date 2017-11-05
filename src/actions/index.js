export default {
  search: (state, actions, {target}) => {
    return {query: target.value};
  },

  editTitle: (state, actions) => {
    return {editingTitle: true};
  },

  saveTitle: (state, actions) => {
    return {editingTitle: false};
  },

  updateTitle: (state, actions, event) => {
    return {
      editingTitle: event.keyCode !== 13,
      title: event.target.value
    };
  }
};
