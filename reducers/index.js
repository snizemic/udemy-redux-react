function combineReducer(currentState, action) {
  var DEFAULT_STATE = { count: 10, sum: 0 };
  var nextState = Object.assign({}, currentState);
  nextState = {
    count: counter(nextState.count, action),
    sum: sum(nextState.sum, action)
  }
  return nextState; 
};