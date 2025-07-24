import Image from 'next/image'

export default function MovieCard({ movie }) {
  if (!movie.poster_path) {
    return (
      <div className="aspect-[2/3] bg-gray-800 rounded flex items-center justify-center">
        <span className="text-gray-400 text-sm">Nincs kép</span>
      </div>
    )
  }

  return (
    <div className="group cursor-pointer transform hover:scale-105 transition-transform duration-200">
      <div className="relative aspect-[2/3] rounded overflow-hidden shadow-lg">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title || 'Film poszter'}
          fill
          className="object-cover group-hover:opacity-75 transition-opacity"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className="mt-2 text-sm font-medium truncate">
        {movie.title || 'Ismeretlen cím'}
      </h3>
    </div>
  )
}