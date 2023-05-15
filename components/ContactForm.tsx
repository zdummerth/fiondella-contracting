import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

type Inputs = {
  name: string;
  email: string;
  message: string;
  phone: string;
};

// create regex for email validation
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const errorClassname = "text-red-500 font-semibold";

const ToastMsg = ({ name }: { name?: string }) => {
  return (
    <div className="py-8 text-xl">
      {name
        ? `Thanks for your message ${name}! We will get back to you soon.`
        : `Sorry there was an error submitting your message. Please try again.`}
    </div>
  );
};

export default function App() {
  const {
    register,
    handleSubmit,
    reset,
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
      if (json.error) throw new Error();
      toast.success(<ToastMsg name={data.name} />);
      reset();
    } catch (e) {
      toast.error(<ToastMsg />, {
        autoClose: false,
      });
      console.error(e);
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="" onSubmit={handleSubmit(onSubmit)}>
      <label className="block font-semibold mb-1 mt-3" htmlFor="name">
        Name*
      </label>
      {errors.name && <span className={errorClassname}>Name is required</span>}
      <input
        className="p-1 rounded w-full"
        {...register("name", { required: true })}
      />

      <label className="block font-semibold mb-1 mt-3" htmlFor="phone">
        Phone*
      </label>
      {errors.phone && (
        <span className={errorClassname}>Phone number is required</span>
      )}
      <input
        className="p-1 rounded w-full"
        type="tel"
        {...register("phone", { required: true })}
      />

      <label className="block font-semibold mb-1 mt-3" htmlFor="email">
        Email*
      </label>
      {errors.email && (
        <span className={errorClassname}>Email is required</span>
      )}
      <input
        className="p-1 rounded w-full"
        type="email"
        {...register("email", { required: true, pattern: emailRegex })}
      />

      <label className="block font-semibold mb-1 mt-3" htmlFor="message">
        Message*
      </label>
      {errors.message && (
        <span className={errorClassname}>Message is required</span>
      )}
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
