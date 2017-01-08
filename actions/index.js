let decrement = () => {
  let action = { type: 'decrement' };
  return action;
}

let increment = () => {
  let action = { type: 'increment' }
  return action;
}

let getSum = (a, b) => {
  let action = { type: 'sum', a: a, b: b }
  return action;
}

