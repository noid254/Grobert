import type { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-transform duration-150 ease-out active:not-disabled:scale-[0.96] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mustard",
  {
    variants: {
      variant: {
        primary: "bg-mustard text-ink hover:bg-mustard-deep hover:text-cream",
        ink: "bg-ink text-cream hover:bg-mustard-dark",
        ghost: "bg-transparent text-ink hover:bg-paper",
        outline: "bg-transparent text-ink shadow-[0_0_0_1px_var(--color-line)] hover:bg-paper",
        sale: "bg-sale text-cream hover:bg-ink",
      },
      size: {
        sm: "h-9 px-3.5 text-xs tracking-wide rounded-md",
        md: "h-11 px-5 text-sm rounded-lg",
        lg: "h-12 px-6 text-sm tracking-wide rounded-lg",
        icon: "size-11 rounded-full",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type Props = ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, ...props }: Props) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

export { buttonVariants };
