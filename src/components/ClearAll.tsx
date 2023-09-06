import { useRecoilState, useSetRecoilState } from "recoil";
import {
  categoriesState,
  categoryState,
  defaultCategories,
  defaultCategory,
  toDoState,
} from "../atoms";

function ClearAll() {
  const setCategories = useSetRecoilState(categoriesState);
  const setCategory = useSetRecoilState(categoryState);
  const setTodos = useSetRecoilState(toDoState);

  const onClick = () => {
    setCategories(defaultCategories);
    setCategory(defaultCategory);
    setTodos([]);
  };
  return <button onClick={onClick}>Clear All</button>;
}
export default ClearAll;
