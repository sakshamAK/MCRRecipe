import { Link } from "react-router-dom";

export const Recipe = ({ item }) => {
  const { id, name, imgSrc, servings, prepTime, cookTime, cuisine } = item;
  return (
    <>
      <Link to={`/${id}`} className="recipeContainer">
        <img src={imgSrc} alt={imgSrc} />
        <h4>Name: {name}</h4>
        <div>
          <p>Servings: {servings}</p>
          <p>Preparation: {prepTime}</p>
          <p>Cooking: {cookTime}</p>
          <p>Cuisine: {cuisine}</p>
        </div>
      </Link>
    </>
  );
};
