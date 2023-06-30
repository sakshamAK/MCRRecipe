import { useRef, useState } from "react";
import data from "./data.json";
import { Recipe } from "./Recipe";

export const Landing = ({ recipe, setRecipe }) => {
  const [category, setCategory] = useState("");
  const [toggle, setToggle] = useState(false);
  const [modifySingleRecipe, setModifySingleRecipe] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    ingredients: '',
    cuisine: '',
    prepTime: '',
    cookTime: '',
  });
  const formRef = useRef(null);

  const modifyRecipe = (item) => {
    setFormValues(item);
    setToggle(true)
    setModifySingleRecipe(true);
  }

  const setRecipeValues = e => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  const editRecipe = (e) => {
    if (modifySingleRecipe) {
      e.preventDefault()
      const getForm = new FormData(formRef.current);
      let newData = Object.fromEntries(getForm.entries())
      newData = { ...newData, ingredients: newData.ingredients.split(" ") }
      console.log(newData, formValues);
      const singleRecipe = recipe.map(item => item.name === formValues.name ? ({ ...item, ...newData }) : item);
      console.log(recipe);
      setRecipe(singleRecipe)
      setToggle(false)
    }
  }

  const submitRecipe = (e) => {
    e.preventDefault();
    const getForm = new FormData(formRef.current);
    let newData = Object.fromEntries(getForm.entries())
    newData = { ...newData, ingredients: newData.ingredients.split(" ") }
    const newRecipe = { ...newData, id: Math.floor(Math.random() * (20 - 5) + 5), instructions: ["lorem, ipsum", "lorem ipsum"], servings: 5, imgSrc: "https://picsum.photos/200/200" }
    setRecipe(p => [...p, newRecipe])
    console.log(recipe);
    setToggle(false)
  }
  const addNewRecipe = () => {
    setToggle(true)
    setModifySingleRecipe(false)
    setFormValues({
      name: '',
      ingredients: '',
      cuisine: '',
      prepTime: '',
      cookTime: '',
    })
  }
  return (
    <>
      <h1>Home Page</h1>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input type="text" onChange={(e) => getInput(e)} />
        <div>
          <input
            type="radio"
            id="name"
            value="name"
            name="recipetype"
            onClick={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="name">Name</label>
          <input
            type="radio"
            id="ingredients"
            value="ingredients"
            name="recipetype"
            onClick={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="ingredients">Ingredients</label>
          <input
            type="radio"
            id="cuisine"
            value="cuisine"
            name="recipetype"
            onClick={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="cuisine">Cuisine</label>
        </div>
        <button onClick={() => addNewRecipe()}>Add new recipe</button>
      </div>
      <form className="add-recipe" style={{ display: toggle ? "flex" : "none" }} ref={formRef}>
        <h1>{modifySingleRecipe ? "Modify Recipe" : "Add New Recipe"}</h1>
        <input name="name" type="text" placeholder="Name of recipe" value={formValues.name} onChange={setRecipeValues} />
        <input name="prepTime" type="text" placeholder="Preparation Time" value={formValues.prepTime} onChange={setRecipeValues} />
        <input name="cookTime" type="text" placeholder="Cooking Time" value={formValues.cookTime} onChange={setRecipeValues} />
        <input name="cuisine" type="text" placeholder="Cuisine type" value={formValues.cuisine} onChange={setRecipeValues} />
        <input name="ingredients" type="text" placeholder="Ingredients of Recipe" value={formValues.ingredients} onChange={setRecipeValues} />
        <div>
          {modifySingleRecipe ? <input type="submit" value="Modify Recipe" style={{ marginBlock: "1rem" }} onClick={(e) => editRecipe(e)} /> :
            <input type="submit" value="Add Recipe" style={{ marginBlock: "1rem" }} onClick={(e) => submitRecipe(e)} />}
        </div>
      </form>
      <div className="container">
        {recipe.map((item) => (
          <div key={item.id} style={{ textAlign: "center" }}>
            <Recipe item={item} />
            <button onClick={() => modifyRecipe(item)}>Modify Recipe</button>
            <button onClick={() => setRecipe(p => p.filter(q => q.name !== item.name))}>Delete Recipe</button>
          </div>
        ))}
      </div>
    </>
  );
};
