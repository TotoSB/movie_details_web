import placeholder from "../components/placeholder-img-1.jpg"

export function getMovieImg(path, width) {
    return path
    ? `https://image.tmdb.org/t/p/w${width}${path}`
    : placeholder 
}