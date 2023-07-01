import { Link } from "react-router-dom";
import { useRecipe } from "../../../context/Recipe";
import style from "./RecipeCard.module.css"

export const RecipeCard = ({ item }) => {
    const { id, name, cuisine, imgSrc, ingredients } = item;
    const { setRecipe, setToggle, setModifySingleRecipe, setFormValues } = useRecipe();
    return (
        <div style={{ display: "flex", position: "relative" }}>
            <div className={style.buttons}>
                <span className="material-symbols-outlined" onClick={() => { setToggle(true); setModifySingleRecipe(true); setFormValues(p => ({ ...p, name, cuisine, ingredients, id, imgSrc })) }}>
                    edit
                </span>
                <span className="material-symbols-outlined" onClick={() => setRecipe(p => { const newList = p.filter(q => q.id !== id); localStorage.setItem("data", JSON.stringify(newList)); return newList })}>
                    delete
                </span>
            </div>
            <Link to={`/${id}`} className={style["recipe-card"]}>
                <img src={imgSrc} alt={imgSrc} />
                <h2>{name}</h2>
                <div>
                    <div className={style["recipe-cuisine"]}>
                        <b>Cuisine Type: </b> <p>{cuisine}</p>
                    </div>
                    <div className={style["recipe-cuisine"]}>
                        <b>Ingredients: </b>
                        <p>See Recipe
                            <span className="material-symbols-outlined">
                                navigate_next
                            </span></p>
                    </div>
                    <div className={style["recipe-cuisine"]}>
                        <b>Instructions: </b>
                        <p>See Recipe
                            <span className="material-symbols-outlined">
                                navigate_next
                            </span></p>
                    </div>
                </div>
            </Link>
        </div>
    )
}
