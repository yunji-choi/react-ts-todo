import { atom, selector } from "recoil";

export enum Categories { // 가질 수 있는 값을 제한할 수 있음.
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export interface IToDo {
  id: number;
  text: string;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({ key: "toDo", default: [] });

// 이 셀렉터는 looking to atoms. 아톰이 변하면, 셀렉터도 변한다.
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);

    return toDos.filter((toDo) => toDo.category === category);
  },
});
