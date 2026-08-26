import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-lg bg-surface px-3.5 text-sm text-ink placeholder:text-subtle",
        "shadow-[0_0_0_1px_var(--color-line)] outline-none transition-shadow duration-150",
        "focus-visible:shadow-[0_0_0_2px_var(--color-mustard)]",
        className,
      )}
      {...props}
    />
  );
}
