function emptyMessage() {
  console.warn("actions is empty!");
}

class ActionStore {
  actions = {
    setGlobalState: emptyMessage,
    onGlobalStateChange: emptyMessage,
  };

  constructor() {}

  initActions(actions) {
    this.actions = actions;
  }

  setGlobalState(state) {
    this.actions.setGlobalState(state);
  }

  onGlobalStateChange(fn) {
    this.actions.onGlobalStateChange(fn);
  }
}

export default new ActionStore();
