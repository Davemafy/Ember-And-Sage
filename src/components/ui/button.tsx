import type { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge"; 

type ButtonVariant =
  | "primary-orange"
  | "primary-dark"
  | "outline-light"
  | "outline-dark"
  | "text-link"
  | "icon-button";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  fullWidth?: boolean;
};

const variantStyles: Record<ButtonVariant, string> = {
  "primary-orange":
    "bg-burnt-orange text-cream-surface hover:bg-burnt-orange-hover active:bg-burnt-orange-active disabled:bg-border-light disabled:text-text-muted",

  "primary-dark":
    "bg-near-black text-warm-ivory hover:bg-soft-black active:bg-black disabled:bg-border-light disabled:text-text-muted",

  "outline-light":
    "bg-transparent text-warm-ivory border border-warm-ivory/55 hover:bg-warm-ivory/10 hover:border-warm-ivory disabled:text-warm-ivory/35 disabled:border-warm-ivory/25",

  "outline-dark":
    "bg-transparent text-burnt-orange border border-burnt-orange hover:bg-burnt-orange/10 active:bg-burnt-orange/15 disabled:text-text-muted disabled:border-border-light",

  "text-link":
    "bg-transparent text-burnt-orange hover:text-burnt-orange-hover active:text-burnt-orange-active p-0 h-auto rounded-none",

  "icon-button":
    "bg-transparent text-burnt-orange border border-border-light hover:bg-burnt-orange/10 hover:border-burnt-orange active:bg-burnt-orange active:text-cream-surface",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-11 px-5 ",
  md: "h-13 px-6 text-[15px]",
  lg: "h-14 px-7 text-base",
};

const iconSizeStyles = "h-11 w-11 p-0 rounded-full";

const Button = ({
  variant = "primary-orange",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const isIconButton = variant === "icon-button";

  return (
    <button
      className={twMerge(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70",
        variantStyles[variant],
        isIconButton ? iconSizeStyles : sizeStyles[size],
        fullWidth ? "w-full" : "",
        className 
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
