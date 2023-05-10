import { useForm, FieldError } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ErrorValidation } from "./ErrorValidation";

type Contact = {
  name: string;
  email: string;
  reason: string;
  notes: string;
};

export function ContactPage() {
  const fieldStyle = "flex flex-col mb-2";

  function getEditorStyle(fieldError: FieldError | undefined) {
    return fieldError ? "border-red-500" : "";
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Contact>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const navigate = useNavigate();

  function onSubmit(contact: Contact) {
    console.log("Submitted", contact);
    navigate(`/thanks/${contact.name}`);
  }

  return (
    <div className="flex flex-col py-10 max-w-md mx-auto">
      <h2 className="text-3x1 font-bold underline mb-3">Contact Us</h2>
      <p className="mb-3">We'll get back to you soon.</p>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className={fieldStyle}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className={getEditorStyle(errors.name)}
          />
          <ErrorValidation fieldError={errors.name} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered email does not match",
              },
            })}
            className={getEditorStyle(errors.email)}
          />
          <ErrorValidation fieldError={errors.email} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="reason">Why contacting us?</label>
          <select
            id="reason"
            {...register("reason", { required: "Reason is required" })}
            className={getEditorStyle(errors.reason)}
          >
            <option value=""></option>
            <option value="Support">Support</option>
            <option value="Feedback">FeedBack</option>
            <option value="Other">Other</option>
          </select>
          <ErrorValidation fieldError={errors.reason} />
        </div>
        <div className={fieldStyle}>
          <label htmlFor="notes">Additional Notes</label>
          <textarea id="notes" {...register("notes")} />
        </div>
        <div>
          <button
            type="submit"
            className="mt-2 h-10 px-6 font-semibold bg-black text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
