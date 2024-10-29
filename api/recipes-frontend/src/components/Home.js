import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Обращаем внимание, что 'Link' с большой буквы
import '../styles/Home.css';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories/')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="home-container">
      <h1 className="title">Категории</h1>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category.id} className="category-item">
            <h2>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </h2>
            <ul>
              {category.recipes.map(recipe => (
                <li key={recipe.id}>
                  <strong>{recipe.title}</strong>: {recipe.description}
                </li>
              ))}
            </ul>
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
