import { RecipeCard } from "../components/RecipeCard/RecipeCard"
import style from "./Landing.module.css"
import { useRecipe } from "../../context/Recipe"
import { getInput } from "../../utlities/searchByCategory"
import { RecipeForm } from "../components/RecipeForm/RecipeForm"

export const Landing = () => {
    const { recipe, setRecipe, category, setCategory, setToggle, setModifySingleRecipe } = useRecipe();
    return (
        <div className={style.landing}>
            <div className={style["landing-search"]}>
                <input type="text" placeholder="Search the item you want" onChange={(e) => getInput(e, category, setRecipe)} />
                <div className={style["search-options"]}>
                    <b>Filters: </b>
                    <div>
                        <input type="radio" checked={category === "name"} value="name" id="name" name="searchrecipies" onChange={(e) => setCategory(e.target.value)} onClick={(e) => setCategory(e.target.value)} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div>
                        <input type="radio" checked={category === "ingredients"} value="ingredients" id="ingredients" name="searchrecipies" onChange={(e) => setCategory(e.target.value)} onClick={(e) => setCategory(e.target.value)} />
                        <label htmlFor="ingredients">Ingredients</label>
                    </div>
                    <div>
                        <input type="radio" checked={category === "cuisine"} value="cuisine" id="cuisine" name="searchrecipies" onChange={(e) => setCategory(e.target.value)} onClick={(e) => setCategory(e.target.value)} />
                        <label htmlFor="cuisine">Cuisine</label>
                    </div>
                </div>
            </div>
            <h1>All Recipies: </h1>
            <div className={style["recipies-container"]}>
                {recipe.map(item => <RecipeCard key={item.id} item={item} />)}
                <span className={`${style.addRecipe} material-symbols-outlined`} onClick={() => { setToggle(true); setModifySingleRecipe(false) }}>
                    add_circle
                </span>
            </div>
            <RecipeForm />
            <hr />
        </div>
    )
}
