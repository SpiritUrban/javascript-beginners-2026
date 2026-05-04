import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "surface rounded-[28px] shadow-glow transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
      {...props}
    />
  );
}
