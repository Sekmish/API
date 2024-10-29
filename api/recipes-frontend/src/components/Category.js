import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Category = () => {
  const { id } = useParams(); // Получаем id категории из URL
  const [category, setCategory] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Загружаем данные о категории и рецептах
    axios.get(`/api/categories/${id}/`)
      .then(response => {
        setCategory(response.data);
        setRecipes(response.data.recipes);
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{category.name}</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
