import axios from "axios";
import { MovieCategories } from "./shared.types";

export async function fetchPopular() {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchMoviePoster(movieId: number) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/images`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function fetchCategory(category: MovieCategories) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      {
        params: {
          api_key: process.env.TMDB_API_KEY,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
