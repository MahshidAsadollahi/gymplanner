import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type,placeholder, ...props }, ref) => {
    return (
      <div className="form__group">
      <input
        type={type}
        className={cn("form__field", className)}
        ref={ref}
        placeholder=" "
        {...props}
      />
       <label className="form__label">{placeholder}</label>
      </div>
    );
  }
);
Input.displayName = "Input"

export { Input }
