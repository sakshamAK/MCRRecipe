import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SinglePage = ({recipes}) => {
  const { id } = useParams();
  const [singleRecipe, setSingleRecipe] = useState({});

  useEffect(() => {
    setSingleRecipe(recipes.find((item) => item.id === Number(id)));
  }, [singleRecipe]);

  return (
    <>
      <h1>Single singleRecipe Page</h1>

      <div className="singlePage">
        <img src={singleRecipe?.imgSrc} alt={singleRecipe?.imgSrc} />
        <div>
          <h1>{singleRecipe?.name}</h1>
          <div>
            <h4>Servings: {singleRecipe?.servings}</h4>
            <h4>
              Cooking Time: {singleRecipe?.cookTime}
            </h4>
            <h4>
              Preparation Time: {singleRecipe?.prepTime}
            </h4>
            <h4>Cuising: {singleRecipe?.cuisine}</h4>
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
