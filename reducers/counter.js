counter = (currentState, action) => {
  const DEFAULT = 0;

  if (currentState === undefined) {
    nextState = DEFAULT;
    return nextState;
  }

  switch (action.type) {
    case 'decrement':
      nextState = currentState - 1;
      return nextState;
    case 'increment':
      nextState = currentState + 1;
      return nextState;
    default:
      nextState = currentState;
      return nextState;
  }
}