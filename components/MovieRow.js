import { useEffect, useState } from 'react'
import { fetchPopularMovies } from '../lib/tmdb'
import MovieCard from './MovieCard'
import Slider from 'react-slick'

export default function MovieRow() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }

  useEffect(() => {
    async function loadMovies() {
      try {
        const popularMovies = await fetchPopularMovies()
        if (popularMovies && popularMovies.length) {
          setMovies(popularMovies)
        } else {
          setError('Nincsenek elérhető filmek')
        }
      } catch (err) {
        console.error('Failed to fetch movies:', err)
        setError('Hiba történt a filmek betöltésekor')
      } finally {
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  if (loading) {
    return (
      <div className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Legnépszerűbb</h2>
        <div className="flex justify-center">
          <div className="animate-pulse text-gray-400">Betöltés...</div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="py-8 px-4">
        <h2 className="text-2xl font-bold mb-4">Legnépszerűbb</h2>
        <div className="text-red-500">{error}</div>
      </div>
    )
  }

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Legnépszerűbb</h2>
      <div className="relative">
        <Slider {...sliderSettings}>
          {movies.map((movie) => (
            <div key={movie.id} className="px-2">
              <MovieCard movie={movie} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}