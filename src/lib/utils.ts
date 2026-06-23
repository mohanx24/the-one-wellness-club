import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function handleImageError(e: React.SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.style.opacity = '0';
}
