import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  name?: string; //required 아닌 항목
  password: string;
  password1: string;

  extraError: string;
  // errors: { email: string };
}

function ToDoList() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError(
        "password1",
        { message: "Password are not the same" },
        { shouldFocus: true }
      );
    }
    // setError("extraError", { message: "Server offline." });
  };
  console.log(errors);
  // register - 상태, name, onBlur, onChange,.. 많은것들 자동생성
  // watch -  입력값을 관찰할 수 있음
  // handleSubmit - validation을 다룬다.
  // formState - 에러 핸들링 (formState.errors) 에러 종류도 알려준다.

  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("email", {
            required: "Email is required.",
            minLength: { value: 5, message: "Your password is too short." },
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "invalid email",
            },
          })}
          placeholder="email"
        />
        <span>{errors?.email?.message}</span>
        <input
          {...register("name", {
            required: "name is required.",
            validate: (v) =>
              !v?.includes("yunji") ? true : "should not include yunji",
          })}
          placeholder="name"
        ></input>
        <span>{errors?.name?.message}</span>
        <input
          {...register("password", { required: "password is required." })}
          placeholder="password"
        ></input>
        <span>{errors?.password?.message}</span>
        <input
          {...register("password1", { required: "password1 is required." })}
          placeholder="password1"
        ></input>
        <span>{errors?.password1?.message}</span>
        <button>Add</button>
      </form>
      <span>{errors?.extraError?.message}</span>
    </div>
  );
}
export default ToDoList;
