import React from 'react';

const Recipe = ({recipe}) => {
  return (
    <article className="recipe">
      <h2>{recipe.name}</h2>

      <dl>
        <dt>Time:</dt>
        <dd>{recipe.time}</dd>

        <dt>Description:</dt>
        <dd>{recipe.description}</dd>
      </dl>
    </article>
  );
}

export default Recipe;
