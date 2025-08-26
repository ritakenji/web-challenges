import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

export default function FavoriteButton() {
  // This should be a state variable.
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleToggleFavorite}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
