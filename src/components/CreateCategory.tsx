import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoriesState, categoryState } from "../atoms";

interface INewCategoryForm {
  newCategory: string;
}

function CreateCategory() {
  const setCategories = useSetRecoilState(categoriesState);
  const setCategory = useSetRecoilState(categoryState);
  const { register, handleSubmit, setValue } = useForm<INewCategoryForm>();

  const handleValid = (data: INewCategoryForm) => {
    setCategories((prev) => [data.newCategory, ...prev]);
    setValue("newCategory", "");
    setCategory(data.newCategory);
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("newCategory", {
          required: "Please write a new Category",
        })}
        placeholder="Add new Category"
      />
      <button>Add Category</button>
    </form>
  );
}
export default CreateCategory;
