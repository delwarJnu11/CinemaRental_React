import { useState } from "react";
import { toast } from "react-toastify";
import { useMovie } from "../../context";
import { getImageURL } from "../../utils/getImageURL";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MovieCard = ({ movie }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const { state, dispatch } = useMovie();

  const handleAddMovieToCart = (e, movie) => {
    e.preventDefault();
    e.stopPropagation();
    const found = state?.cartData?.find((item) => item.id === movie.id);
    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...movie },
      });
      toast.success(`${movie.title} added to the cart`);
    } else {
      toast.warn(`${movie.title} already added to the cart`);
    }
  };

  const handleSelectedMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onAddMovieToCart={handleAddMovieToCart}
        />
      )}
      <figure
        className="p-4 border cursor-pointer border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        onClick={() => handleSelectedMovie(movie)}
      >
        <img
          className="w-full object-cover"
          src={getImageURL(movie.cover)}
          alt={movie.title}
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <div className="flex items-center space-x-1 mb-5">
            <Rating value={movie.rating} />
          </div>
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href=""
            onClick={(e) => handleAddMovieToCart(e, movie)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
};
export default MovieCard;
