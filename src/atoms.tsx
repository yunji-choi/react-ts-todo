import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export interface IToDo {
  id: number;
  text: string;
  category: string;
}

//----CONSTANTS----
export const defaultCategories = ["TO_DO", "DOING", "DONE"];
export const defaultCategory = "TO_DO";

//----STATES----
export const categoriesState = atom({
  key: "categories",
  default: defaultCategories,
});
export const categoryState = atom({
  key: "category",
  default: defaultCategory,
  effects_UNSTABLE: [persistAtom],
});
export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

//----SELECTORS----
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
