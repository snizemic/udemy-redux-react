var store = Redux.createStore(combineReducer);

var valueEl = document.getElementById('value');
var valueEl2 = document.getElementById('value2');

function render() {
  valueEl.innerHTML = store.getState().count;
  valueEl2.innerHTML = store.getState().sum;
}
render();
store.subscribe(render);

document.getElementById('decrease')
  .addEventListener('click', function () {  
    store.dispatch(decrement());
  });

document.getElementById('increase')
  .addEventListener('click', function () {
    setTimeout(function () {    
      store.dispatch(increment());
    }, 1000);
  });

document.getElementById('sum')
  .addEventListener('click', function () {
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;    
    store.dispatch(getSum(a, b));
  });