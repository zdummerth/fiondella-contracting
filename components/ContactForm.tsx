import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

// create regex for email validation
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    try {
      const res = await fetch("/api/submit-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      console.log(json);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <label className="block font-semibold mb-1 mt-3" htmlFor="name">
        Name*
      </label>
      {errors.name && <span>Name is required</span>}
      <input
        className="p-1 rounded w-full"
        {...register("name", { required: true })}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <label className="block font-semibold mb-1 mt-3" htmlFor="email">
        Email*
      </label>
      {errors.email && <span>Email is required</span>}
      <input
        className="p-1 rounded w-full"
        type="email"
        {...register("email", { required: true, pattern: emailRegex })}
      />

      <label className="block font-semibold mb-1 mt-3" htmlFor="message">
        Message*
      </label>
      {errors.message && <span>Message is required</span>}
      <textarea
        className="p-1 rounded w-full"
        rows={6}
        {...register("message", { required: true })}
      />

      <button className="block bg-white py-1 px-2 my-2 rounded text-black w-full">
        {isSubmitting ? "Sending..." : "Submit"}
      </button>
    </form>
  );
}
