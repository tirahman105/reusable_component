import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import cn from "../../utils/cn";

const Button = ({ className, varient }) => {
  const getVarient = (varient) => {
    switch (varient) {
      case "outline":
        return "btn-outline";
      case "ghost":
        return "btn-ghost";
      default:
        return "btn-solid";
    }
  };
  return <button className={cn(getVarient(varient), className)}>Click</button>;
};

export default Button;
