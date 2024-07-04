import { TodoItem } from './TodoCard';
import TodoCard from './TodoCard';
import './styles.scss';

interface TodoContainerProps {
  todos: TodoItem[];
}

const TodoContainer: React.FC<TodoContainerProps> = ({ todos }) => {
  return (
    <div className="todo__container">
      <h1>To Do</h1>
      <ul className="todo__list">
        {todos.map(todo => (
          <li key={todo.id}>
            <TodoCard todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
