import { useRecoilState, useRecoilValue } from "recoil";
import CreateTodo from "./CreateToDo";
import { categoryState, toDoSelector, categoriesState } from "../atoms";
import ToDo from "./ToDo";
import CreateCategory from "./CreateCategory";
import ClearAll from "./ClearAll";

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  const categories = useRecoilValue(categoriesState);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Dos</h1>
      <CreateCategory />
      <hr />
      <form>
        Category :
        <select value={category} onInput={onInput}>
          {categories.map((cat) => (
            <option value={cat} key={cat}>
              {cat}
            </option>
          ))}
        </select>
        <p> </p>
      </form>
      <CreateTodo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
      <ClearAll />
    </div>
  );
}
export default ToDoList;
