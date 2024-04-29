import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils.js";

const buttonVariants = cva(
  "leading-none bg-gradient-to-r from-cyan-900 to-green-800 hover:-translate-y-1 duration-500 rounded-[10px] transition-all disabled:bg-slate-200 text-white  border",
  {
    variants: {
      variant: {
        roundedBtn:
          "rounded-[30px] disabled:bg-slate-200  py-[14px] px-3 md:px-[30px] md:py-[16px] xl:py-[18px] ",
        primaryBtn:
          "rounded-[10px]  disabled:bg-slate-200 py-[14px] px-3 md:px-[30px] md:py-[16px] xl:py-[18px] ",
        regularBtn:
          "rounded-[10px] disabled:bg-slate-200 py-[14px]  px-3 md:px-[30px] md:py-[16px] xl:py-[18px]  ",
        outlineBtn: "border bg-none border-black text-black  py-[14px] px-3 ",
        textBtn:
          "text-black bg-none border-none py-[14px] px-3 md:px-[30px] md:py-[16px] xl:py-[18px] ",
      },
    },
    defaultVariants: {
      variant: "roundedBtn",
    },
  }
);

const Button = ({ variant, className, label, icon, reverse, ...props }) => {
  return (
    <button
      className={`disabled:bg-slate-200 ${cn(buttonVariants({ variant, className }))}`}
      {...props}
    >
      <div
        className={
          icon &&
          `flex justify-center items-center gap-2 ${
            reverse ? "flex-row-reverse gap-2" : "flex-row"
          }`
        }
      >
        <span className="min-w-fit">{label}</span>
        <span>{icon && <>{icon}</>}</span>
      </div>
    </button>
  );
};

export default Button;
