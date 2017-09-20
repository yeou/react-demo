import { connect } from 'react-redux';
import { toggleTodo } from './actions';
import TodoList from './todo-list';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    default:
      return todos;
  }
};

const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
};

// The connect function makes a Container component.
const VisibleTodoList = connect(
  mapStateToProps, // if you don't have anything to map to your props you can set it to null.
  mapDispatchToProps // if this is set to null, you only set the dispatch itself on the prop.
)(TodoList);

export default VisibleTodoList;
