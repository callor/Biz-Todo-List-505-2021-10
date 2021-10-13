import { TodoItem } from "../index";
import { useTodoContext } from "../../context";

function TodoList() {
  const { todoList } = useTodoContext();

  const listView = todoList.map((item) => {
    return <TodoItem todo={item} key={item.t_id} />;
  });

  return <div>{listView}</div>;
}

export default TodoList;
