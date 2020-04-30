import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
  const recipeNodes = recipes.map(recipe => <Recipe recipe={recipe} />)

  return (
    <div className="recipe-list">
      {recipeNodes}
    </div>
  );
};

export default RecipeList;
