const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || 'YOUR_TMDB_API_KEY';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function fetchPopularMovies() {
  try {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=hu&page=1`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}