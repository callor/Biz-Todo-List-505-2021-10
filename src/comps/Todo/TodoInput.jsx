import "../../css/TodoInput.css";
import { useTodoContext } from "../../context";

function TodoInput() {
  const { inputId, todo, onChange, onClick, onKeyPress } = useTodoContext();
  return (
    <div className="form">
      <input
        ref={inputId}
        onChange={onChange}
        value={todo.t_text}
        onKeyPress={onKeyPress}
      />
      <div className="btn_insert" onClick={onClick}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
