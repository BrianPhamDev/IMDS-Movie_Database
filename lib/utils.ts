import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomIndexs(length: number): number[] {
  const indices = new Set<number>();
  while (indices.size < 4) {
    indices.add(Math.floor(Math.random() * length));
  }
  return Array.from(indices);
}

export function imageUrl(posterPath: string, size = "w500") {
  return `https://image.tmdb.org/t/p/${size}${posterPath}`;
}

export function getYear(dateString: string) {
  return dateString.split("-")[0];
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function convertPopularityToRating(popularity: number) {
  const maxRating = 100;
  const scale = 10; // Adjust this value to change the scale of the rating

  // Use the logarithm base 10 of the popularity plus 1 (to avoid log(0))
  // Multiply by the scale and limit the result to maxRating
  const rating = Math.min(maxRating, Math.log10(popularity + 1) * scale);

  if (isNaN(rating)) {
    return "N/A";
  }

  const ratingNumber = Math.ceil(rating) + "%";
  // Round up the rating and return it
  return ratingNumber;
}
