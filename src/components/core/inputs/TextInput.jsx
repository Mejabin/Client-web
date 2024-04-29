import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "px-4 py-3 w-full border border-slate-500 rounded-[6px] outline-none bg-inherit text-[14px] peer"
);
const TextInput = ({
  label,
  className,
  type,
  id,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div >
      <div className="relative">
        <input
          autoComplete="off"
          type={type}
          id={id}
          className={cn(inputVariants({ className }))}
          {...props}
          placeholder={placeholder ? placeholder : ""}
        />
        <label
          htmlFor={id}
          className="absolute bg-white text-sm duration-300 transform  -translate-y-3 scale-75  z-10 origin-[0]  px-2 peer-focus:px-4  peer-placeholder-shown:scale-100  peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {label}
        </label>
      </div>
      <p className="text-red-600 pt-2">{error}</p>
    </div>
  );
};

export default TextInput;

{
  /* <TextInput
name="url"
id="url"
value={values.url}
onChange={handleChange}
className="w-full"
label=" Enter Your news link/url Here"
error={Boolean(errors.url) && touched.url && errors.url}
/> */
}
