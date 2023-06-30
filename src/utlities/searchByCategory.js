
export const getInput = (e, category, setRecipe) => {
  const data = JSON.parse(localStorage.getItem("data"));
  if (e.target.value === "") setRecipe(data);
  switch (category) {
    case "name":
      setRecipe(
        data.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );

      break;
    case "ingredients":
      setRecipe(
        data.filter((item) =>
          item.ingredients
            .join(",")
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
        )
      );
      break;
    case "cuisine":
      setRecipe(
        data.filter((item) =>
          item.cuisine.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      break;
    default:
      setRecipe(data);
  }
};