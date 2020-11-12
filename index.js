let displayMeals = (recipes) => {
  let arrayOfMeals = recipes.meals;
  arrayOfMeals.map((recipe) => console.log(recipe.strMeal));
};

let meals = async () => {
  let getMeals = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=b`
  );

  getMeals = await getMeals.json();

  displayMeals(getMeals);
};

meals();
