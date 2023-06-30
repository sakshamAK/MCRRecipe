import { editRecipe, setRecipeValues, submitRecipe } from "../../../utlities/addModifyRecipe";
import { useRecipe } from "../../../context/Recipe";
import style from "./RecipeForm.module.css"

export const RecipeForm = () => {

    const { formRef, recipe, setRecipe, modifySingleRecipe, toggle, setToggle, setFormValues, formValues } = useRecipe();

    return (
        <form className={style["recipe-form"]} style={{ display: toggle ? "flex" : "none" }} ref={formRef}>
            <h3>{modifySingleRecipe ? "Modify Recipe" : "Add New Recipe"}</h3>
            <input name="name" type="text" placeholder="Name of recipe" value={formValues.name} onChange={e => setRecipeValues(e, setFormValues)} />
            <input name="cuisine" type="text" placeholder="Cuisine type" value={formValues.cuisine} onChange={e => setRecipeValues(e, setFormValues)} />
            <input name="ingredients" type="text" placeholder="Ingredients of Recipe" value={formValues.ingredients} onChange={e => setRecipeValues(e, setFormValues)} />
            <div>
                {modifySingleRecipe ? <input type="submit" value="Modify Recipe" style={{ marginBlock: "1rem" }} onClick={(e) => editRecipe(e, modifySingleRecipe, formRef, formValues, recipe, setRecipe, setToggle)} /> :
                    <input type="submit" value="Add Recipe" style={{ marginBlock: "1rem" }} onClick={(e) => submitRecipe(e, formRef, setRecipe, setToggle)} />}
            </div>
        </form>
    )
}
