sum = (currentState, action) => {
  const DEFAULT = 0;

  if (currentState === undefined) {
    nextState = DEFAULT;
    return nextState;
  }

  switch (action.type) {
    case 'sum':
      nextState = parseInt(action.a) + parseInt(action.b);
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }
}