import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import style from "./SinglePage.module.css"
import { useRecipe } from "../../context/Recipe";

export const SinglePage = () => {
  const { id } = useParams();
  const { recipe } = useRecipe()
  const [singleRecipe, setSingleRecipe] = useState({});

  useEffect(() => {
    setSingleRecipe(recipe.find((item) => item.id === Number(id)));
  }, [singleRecipe]);

  return (
    <>
      <h1 className={style["recipe-title"]}>{singleRecipe?.name}</h1>

      <div className={style.singlePage}>
        <img src={singleRecipe?.imgSrc} alt={singleRecipe?.imgSrc} />
        <div>
          <div>
            <h3>Cuisine: {singleRecipe?.cuisine}</h3>
          </div>
          <p>
            <strong>Ingredients: </strong>
            {singleRecipe?.ingredients?.join(", ")}
          </p>
          <strong>Instructions: </strong>
          <p>
            {singleRecipe?.instructions?.map((item) => (
              <>
                {item}
                <br />
              </>
            ))}
          </p>
        </div>
      </div>
    </>
  );
};
