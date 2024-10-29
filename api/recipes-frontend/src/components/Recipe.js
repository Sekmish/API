import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Recipe = () => {
  const { id } = useParams(); // Получаем id рецепта из URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Загружаем данные о рецепте
    axios.get(`/api/recipes/${id}/`)
      .then(response => setRecipe(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <p>Category: {recipe.category.name}</p>
    </div>
  );
};

export default Recipe;
