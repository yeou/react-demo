import deepFreeze from 'deep-freeze';
import todos from './reducers/todos';

it('add todo', () => {
  var stateBefore = [];
  var action = {
    type: "ADD_TODO",
    id: 0,
    text: "Learn Redux"
  };
  var stateAfter = [{
    id: 0,
    text: "Learn Redux",
    completed: false
  }];
  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(todos(stateBefore, action)).toEqual(stateAfter);
  //console.log(todos (stateBefore, action));
});
