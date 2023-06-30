export const modifyRecipe = (item, setFormValues, setToggle, setModifySingleRecipe) => {
    setFormValues(item);
    setToggle(true)
    setModifySingleRecipe(true);
}

export const setRecipeValues = (e, setFormValues) => {
    e.preventDefault()
    const { name, value } = e.target;
    setFormValues(p => ({
        ...p,
        [name]: value,
    }));
}

export const editRecipe = (e, modifySingleRecipe, formRef, formValues, recipe, setRecipe, setToggle) => {
    if (modifySingleRecipe) {
        e.preventDefault()
        const getForm = new FormData(formRef.current);
        let newData = Object.fromEntries(getForm.entries())
        newData = { ...newData, ingredients: newData.ingredients.split(",") }
        const singleRecipe = recipe.map(item => item.id === formValues.id ? ({ ...item, ...newData }) : item);
        setRecipe(singleRecipe)
        localStorage.setItem("data", JSON.stringify(singleRecipe));
        setToggle(false)
    }
}

export const submitRecipe = (e, formRef, setRecipe, setToggle) => {
    e.preventDefault();
    const getForm = new FormData(formRef.current);
    let newData = Object.fromEntries(getForm.entries())
    newData = { ...newData, ingredients: newData.ingredients.split(" ") }

    const instructions = ["1. Read the recipe: Familiarize yourself with the recipe and gather all the necessary ingredients and tools before starting.",
        "2. Prep work: Wash and chop vegetables, measure ingredients, and prepare any required marinades or sauces before you begin cooking.",
        "3. Heat the pan: Preheat the cooking surface, whether it's a stovetop burner, oven, grill, or any other cooking apparatus, to the specified temperature mentioned in the recipe.",
        "4. Follow the order: Generally, recipes provide a specific order of adding ingredients. Follow the instructions precisely to ensure proper cooking and flavor development.",
        "5. Control the heat: Adjust the heat as needed throughout the cooking process to prevent burning or undercooking. Higher heat is suitable for searing or browning, while lower heat is ideal for simmering or gentle cooking."]

    const newRecipe = { ...newData, id: Math.floor(Math.random() * (20 - 5) + 5), instructions, imgSrc: "https://picsum.photos/400/400" }
    setRecipe(p => {
        const newList = [...p, newRecipe];
        localStorage.setItem("data", JSON.stringify(newList));
        return newList;
    })
    setToggle(false)
}