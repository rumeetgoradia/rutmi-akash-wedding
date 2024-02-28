import { cn } from "@/lib/styles";
import * as React from "react";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "font-figtree mt-0 flex min-h-[80px] w-full rounded-sm border border-slate-200 bg-background bg-white px-3 py-2 text-[16px] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed  disabled:opacity-50 ",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };
