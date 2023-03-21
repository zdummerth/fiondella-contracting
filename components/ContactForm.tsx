import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <label className="block font-semibold mb-1 mt-3" htmlFor="name">
        Name
      </label>
      {errors.name && <span>Name is required</span>}
      <input
        className="border-2 w-full"
        {...register("name", { required: true })}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <label className="block font-semibold mb-1 mt-3" htmlFor="email">
        Email
      </label>
      {errors.email && <span>Email is required</span>}
      <input
        className="border-2 w-full"
        {...register("email", { required: true })}
      />

      <label className="block font-semibold mb-1 mt-3" htmlFor="message">
        Message
      </label>
      <textarea
        className="p-1 rounded border-2 w-full"
        // onKeyDown={(e: any) => {
        //   e.target.style.height = "inherit";
        //   e.target.style.height = `${e.target.scrollHeight}px`;
        // }}
        rows={6}
        {...register("message", { required: true })}
      />

      <button className="block bg-emerald-500 py-1 px-2 my-2 rounded text-white w-full">
        Send
      </button>
    </form>
  );
}
