
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const textareaVariants = cva(
  "rounded-[6px] outline-none bg-inherit py-3 px-4 peer   border border-slate-500"
);
const TextareaInput = ({
  label,
  className,
  id,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div className="relative ">
      <textarea
        autoComplete="off"
        type="text"
        id={id}
        className={`min-h-32 ${cn(textareaVariants({ className }))}`}
        {...props}
        placeholder={placeholder ? placeholder : ""}
      />
      <label
        htmlFor={id}
        className="text-sm md:text-base  transform absolute -top-2 z-10 origin-[0] mx-1 px-3 duration-300 bg-white rounded-[10px] scale-75
        peer-placeholder-shown:-translate-y-3
        peer-placeholder-shown:top-6
        peer-placeholder-shown:scale-100
        peer-focus:px-4 peer-focus:scale-75 peer-focus:top-1
        peer-focus:-translate-y-4
        rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {label}
      </label>
      <p className="text-red-400 pt-2">{error}</p>
    </div>
  );
};

export default TextareaInput;
