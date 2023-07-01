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
        newData = { ...newData, instructions: newData.instructions.split("\n") };
        console.log(newData);
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
    newData = { ...newData, instructions: newData.instructions.split("\n") };
    console.log(newData);
    const newRecipe = { ...newData, id: Math.floor(Math.random() * (20 - 5) + 5) }
    setRecipe(p => {
        const newList = [...p, newRecipe];
        localStorage.setItem("data", JSON.stringify(newList));
        return newList;
    })
    setToggle(false)
}