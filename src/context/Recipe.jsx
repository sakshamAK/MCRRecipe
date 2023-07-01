import { createContext, useContext, useRef, useState } from "react";
import data from "../data.json";

const RecipeContext = createContext(null)

export const useRecipe = () => useContext(RecipeContext);

export const RecipeProvider = ({ children }) => {
    !localStorage.getItem("data") && localStorage.setItem("data", JSON.stringify(data))
    const [category, setCategory] = useState("name");
    const [recipe, setRecipe] = useState(JSON.parse(localStorage.getItem("data")));
    const [modifySingleRecipe, setModifySingleRecipe] = useState(false);
    const [toggle, setToggle] = useState(false);
    const formRef = useRef(null);
    const [formValues, setFormValues] = useState({
        name: '',
        ingredients: [],
        cuisine: '',
        id: '',
        instructions: [],
        imgSrc: ''
    });

    return (
        <RecipeContext.Provider value = {{ category, setCategory, recipe, setRecipe, modifySingleRecipe, setModifySingleRecipe, toggle, setToggle, formRef, formValues, setFormValues }}>
            {children}
        </RecipeContext.Provider>
    )
}
